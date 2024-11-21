export type Player = {
    equipo: string;
    carnet: string;
    curp: string;
    nombre: string;
    apellido_paterno: string;
    apellido_materno: string;
    categoria: number;
    fecha_nacimiento: string;
    años_registro: number;
    foto: File | null;
    ine: File | null;
    curpFile: File | null;
};

export type PlayerInputForm = Pick<
    Player,
    | "curp"
    | "nombre"
    | "apellido_paterno"
    | "apellido_materno"
    | "categoria"
    | "fecha_nacimiento"
    | "foto"
    | "ine"
    | "curpFile"
>;

export type PlayerResponse = {
    curp: string;
    nombre: string;
    apellido_paterno: string;
    apellido_materno: string;
    categoria: Array<{ id_categoria: number; nombre: string; edad_minima: number }>;
    fecha_nacimiento: string;
    message: string;
};
