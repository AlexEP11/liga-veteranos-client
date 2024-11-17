export type Player = {
    equipo: string;
    carnet: string;
    curp: string;
    nombre: string;
    apellido_paterno: string;
    apellido_materno: string;
    categoria: string;
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
