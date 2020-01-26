#!groovy
import groovy.json.JsonOutput
import groovy.json.JsonSlurper

def label = "frontend-${UUID.randomUUID().toString()}"
podTemplate(label: label, yaml: """
apiVersion: v1
kind: Pod
metadata:
  labels:
    some-label: some-label-value
spec:
  volumes:
  - name: dockersock
    hostPath:
      path: /var/run/docker.sock
  - name: kubeconfig
    hostPath:
      path: /opt/kubernetes/storage/.kube
  containers:
  - name: k8s-helm
    image: lachlanevenson/k8s-helm:v3.0.0-beta.3
    command:
    - cat
    tty: true
    volumeMounts:
      - name: kubeconfig
        mountPath: "/home/s/.kube"
  - name: docker
    image: docker
    volumeMounts:
      - name: dockersock
        mountPath: "/var/run/docker.sock"
    command:
    - cat
    tty: true
"""
)
	{
		node(label) {
			stage('checkout') {

				checkout scm

				container('docker') {
                    env.DOCKER_TAG = "${BRANCH_NAME}_${BUILD_NUMBER}"
                    stage('build application') {
                        sh 'docker build -f install/Dockerfile -t localhost:32000/scraper-sandbox:${DOCKER_TAG} .'
                    }
                    stage('publish application') {
                        sh 'docker push localhost:32000/scraper-sandbox:${DOCKER_TAG}'
                    }
				}

				container('k8s-helm') {
					stage('SET ENV') {
						if (env.BRANCH_NAME == 'master') {
							env.VALUES_FILE = 'values-prod.yaml'
							env.KUBECONFIG = '/opt/.kube/prod-kube-config'
						}
					}
                    stage('helm upgrade scraper-sandbox') {
                        sh "helm upgrade --install scraper-sandbox \
                            -f install/helm/sandbox/values.yaml \
                            -f install/helm/sandbox/${VALUES_FILE} \
                            --version 1.0.${BUILD_NUMBER}\
                            --namespace scraper \
                            --set image.tag=${DOCKER_TAG} \
                            install/helm/sandbox"
                    }
				}
			}
		}
	}
