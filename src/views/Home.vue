<template>
  <div class="home">
    <h2>Elasticdata sandbox</h2>
    <h2>with examples real user cases</h2>
    <div class="p-lg-5">
      <table class="table table-striped table-bordered">
        <thead>
        <tr>
          <th scope="col">Group of</th>
          <th scope="col">Action</th>
          <th scope="col">Elasticdata UI config</th>
          <th scope="col">Elasticdata yaml config</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td rowspan="2">Extract text from page</td>
          <th>
            Simple copy text from any element
          </th>
          <td>open preview</td>
          <td>open yaml</td>
        </tr>
        <tr>
          <th>
            Copy text from hidden attribute of the element
          </th>
          <td>open preview</td>
          <td>open yaml</td>
        </tr>
        <tr>
          <td rowspan="3">Page pagination</td>
          <th>
            <router-link :to="{name: 'pagination', params: {page: 0}}">
              Number button pagination
            </router-link>
          </th>
          <td>open preview</td>
          <td>open yaml</td>
        </tr>
        <tr>
          <th>Next button pagination</th>
          <td>open preview</td>
          <td>open yaml</td>
        </tr>
        <tr>
          <th>Scroll down pagination</th>
          <td>open preview</td>
          <td>open yaml</td>
        </tr>
        <tr>
          <td rowspan="2">Click on element</td>
          <th>Button click emulation</th>
          <td>open preview</td>
          <td>open yaml</td>
        </tr>
        <tr>
          <th>Real mouse hover on button and click</th>
          <td>open preview</td>
          <td>open yaml</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  components: {}
}
</script>
