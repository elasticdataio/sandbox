export default abstract class ActionPainter {

    static click(cssSelector: string) {
        const el = document.querySelector(cssSelector) as HTMLElement;
        if (!el) {
            console.error(`element with selector ${cssSelector} not found on page`);
            return;
        }
        ActionPainter.clickEffect(el);
        el.click();
    }

    static clickEffect(el: HTMLElement) {
        const d = document.createElement("div") as HTMLElement;
        d.className = "click-effect";
        const rect = el.getBoundingClientRect();
        d.style.left = (rect.left + rect.width / 2) + "px";
        d.style.top = (rect.top + rect.height / 2) + "px";
        document.body.appendChild(d);
        d.addEventListener('animationend', function() {
            if (d.parentElement) {
                d.parentElement.removeChild(d);
            }
        });
    }

}
