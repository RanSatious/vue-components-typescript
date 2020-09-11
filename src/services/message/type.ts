export interface IMessageOption {
    message?: string;
    title?: string;
    visible?: boolean;
    onClose?: (confirm: boolean) => void;
    onOpen?: () => void;
    align?: 'left' | 'center' | 'right';
    buttons?: IMessageButton[];
    width?: number;
    className?: string;
    loading?: boolean;
    callback?: {
        [key in MessageAction]?: () => void;
    };
    confirm?: boolean;
}

export type MessageType = 'alert' | 'confirm';

type MessageAction = 'confirm' | 'cancel' | 'custom';

export interface IMessageButton {
    type: 'primary' | 'danger' | 'info';
    text: string;
    action: MessageAction;
}
