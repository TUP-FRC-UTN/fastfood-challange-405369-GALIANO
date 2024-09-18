export interface pedido{
    number: number;
    name: string;
    description: string;
    date: Date;
    state: estado;
}

export enum estado {
    PENDIENTE,
    COCINANDO,
    TERMINADO,
    ENTREGADO
}
