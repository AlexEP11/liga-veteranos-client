export type Player = {
    equipo: number;
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

export type PlayerInputForm = Omit<Player, "carnet" | "años_registro">;

export type PlayerResponse = {
    curp: string;
    nombre: string;
    apellido_paterno: string;
    apellido_materno: string;
    categoria: Array<{ id_categoria: number; nombre: string; edad_minima: number }>;
    fecha_nacimiento: string;
    message: string;
};
