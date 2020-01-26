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

    static selectText(cssSelector: string) {
        const el = document.querySelector(cssSelector) as HTMLElement;
        if (!el) {
            console.error(`element with selector ${cssSelector} not found on page`);
            return;
        }
        ActionPainter.selectTextEffect(el);
    }

    static selectTextEffect(el: HTMLElement) {
        // ActionPainter.selectElementContents(el)
        const d = document.createElement("div") as HTMLElement;
        d.className = "selection-effect";
        const rect = el.getBoundingClientRect();
        d.style.left = rect.left + "px";
        d.style.top = rect.top + "px";
        d.style.width = rect.width + "px";
        d.style.height = rect.height + "px";
        document.body.appendChild(d);
        d.addEventListener('animationend', function() {
            setTimeout(() => {
                if (d.parentElement) {
                    d.parentElement.removeChild(d);
                }
            }, 500);
        });
    }

    static selectElementContents(el: HTMLElement) {
        const sel = window.getSelection();
        const range = document.createRange();
        range.selectNodeContents(el);
        if (sel) {
            sel.removeAllRanges();
            sel.addRange(range);
        }
    }
}
