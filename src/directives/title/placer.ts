import { IRect } from './type';

class Placer {
    gap: number;

    constructor(gap = 10) {
        this.gap = gap;
    }
    top(rect: IRect, self: HTMLElement) {
        return {
            top: rect.y - self.offsetHeight - this.gap,
            left: rect.x + rect.width / 2 - self.offsetWidth / 2
        };
    }
    'top-start'(rect: IRect, self: HTMLElement) {
        return {
            top: rect.y - self.offsetHeight - this.gap,
            left: rect.x
        };
    }
    'top-end'(rect: IRect, self: HTMLElement) {
        return {
            top: rect.y - self.offsetHeight - this.gap,
            left: rect.x + rect.width - self.offsetWidth
        };
    }
    right(rect: IRect, self: HTMLElement) {
        return {
            top: rect.y + rect.height / 2 - self.offsetHeight / 2,
            left: rect.x + rect.width + this.gap
        };
    }
    'right-start'(rect: IRect, self: HTMLElement) {
        return {
            top: rect.y,
            left: rect.x + rect.width + this.gap
        };
    }
    'right-end'(rect: IRect, self: HTMLElement) {
        return {
            top: rect.y + rect.height - self.offsetHeight,
            left: rect.x + rect.width + this.gap
        };
    }
    bottom(rect: IRect, self: HTMLElement) {
        return {
            top: rect.y + rect.height + this.gap,
            left: rect.x + rect.width / 2 - self.offsetWidth / 2
        };
    }
    'bottom-start'(rect: IRect, self: HTMLElement) {
        return {
            top: rect.y + rect.height + this.gap,
            left: rect.x
        };
    }
    'bottom-end'(rect: IRect, self: HTMLElement) {
        return {
            top: rect.y + rect.height + this.gap,
            left: rect.x + rect.width - self.offsetWidth
        };
    }
    left(rect: IRect, self: HTMLElement) {
        return {
            top: rect.y + rect.height / 2 - self.offsetHeight / 2,
            left: rect.x - self.offsetWidth - this.gap
        };
    }
    'left-start'(rect: IRect, self: HTMLElement) {
        return {
            top: rect.y,
            left: rect.x - self.offsetWidth - this.gap
        };
    }
    'left-end'(rect: IRect, self: HTMLElement) {
        return {
            top: rect.y + rect.height - self.offsetHeight,
            left: rect.x - self.offsetWidth - this.gap
        };
    }
}

export default Placer;
