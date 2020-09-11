import { RouteType, ISection } from '../router/type';
import { PropType } from 'vue';
import { ValidateFields } from 'ant-design-vue/types/form/form';

// from vue type declaration
declare type DefaultFactory<T> = (props: Record<string, unknown>) => T | null | undefined;

// from vue type declaration
export type PropsType<T> = Readonly<ExtractPropTypes<T>>;

// from vue type declaration
declare type InferPropType<T> = T extends null
    ? any
    : T extends {
          type: null | true;
      }
    ? any
    : T extends
          | ObjectConstructor
          | {
                type: ObjectConstructor;
            }
    ? Record<string, any>
    : T extends
          | BooleanConstructor
          | {
                type: BooleanConstructor;
            }
    ? boolean
    : T extends Prop<infer V, infer D>
    ? unknown extends V
        ? D
        : V
    : T;

// from vue type declaration
declare type ExtractPropTypes<O> = O extends object
    ? {
          [K in keyof O]: InferPropType<O[K]>;
      }
    : {
          [K in string]: any;
      };

// from vue type declaration
export interface Prop<T = any, D = T> {
    type: PropType<T> | true | null;
    default: D | DefaultFactory<D> | null | undefined | object;
    required?: boolean;
    validator?(value: unknown): boolean;
}

export interface IDemoSection extends ISection {
    category: string;
}

export type RefForm<T> = {
    validate: ValidateFields;
    getFieldsValue: () => T;
} | null;

export const RoutePathMap = {
    [RouteType.Default]: '',
    [RouteType.Component]: 'components',
    [RouteType.Directive]: 'directives',
    [RouteType.Mixin]: 'mixins',
    [RouteType.Service]: 'services',
    [RouteType.Section]: 'sections'
};
