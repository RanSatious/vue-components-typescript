import { Prop } from '../../utils/type';

export interface IBaseProps {
    top: Prop<number>;
    left: Prop<number>;
}

export interface IRectProps extends IBaseProps {
    width: Prop<number>;
    height: Prop<number>;
}

export const getBaseProps = (): IBaseProps => ({
    top: {
        type: Number,
        default: 0
    },
    left: {
        type: Number,
        default: 0
    }
});

export const getRectProps = (): IRectProps => ({
    ...getBaseProps(),
    width: {
        type: Number,
        default: 200
    },
    height: {
        type: Number,
        default: 200
    }
});
