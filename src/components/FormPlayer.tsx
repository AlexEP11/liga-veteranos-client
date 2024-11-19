import {
    Box,
    TextField,
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    FormHelperText,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import BadgeIcon from "@mui/icons-material/Badge";
import { useForm } from "react-hook-form";
import { PlayerInputForm } from "../types";
import { usePlayer } from "../hooks/usePlayer";
import { ChangeEvent, useEffect } from "react";
export default function FormPlayer() {
    const { playerData, setPlayerData } = usePlayer();

    const initialValues: PlayerInputForm = {
        curp: "",
        nombre: "",
        apellido_paterno: "",
        apellido_materno: "",
        categoria: "",
        fecha_nacimiento: "",
        foto: null,
        ine: null,
        curpFile: null,
    };

    const { register, handleSubmit, reset, setValue, watch } = useForm<PlayerInputForm>({
        defaultValues: initialValues,
    });

    const formValues = watch(); // Observar valores del formulario

    useEffect(() => {
        setPlayerData({
            ...playerData,
            ...formValues, // Agrega los valores actuales del formulario
            foto: formValues.foto || null,
        });
    }, [formValues, setPlayerData]);

    const handleCURPFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setValue("curpFile", file);
        }
    };

    const handleINEFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setValue("ine", file);
        }
    };

    const handlePhotoFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setValue("foto", file);
        }
    };
    const onSubmit = (data: PlayerInputForm) => {
        console.log("Datos enviados:", data);
        reset();
    };

    const isFormValid = Object.values(formValues).every((value) => value !== "" && value !== null);

    return (
        <Box
            component="form"
            autoComplete="false"
            noValidate
            className="py-5 px-16 sm:px-16 rounded-xl shadow-xl bg-white bg-gradient-to-b from-[#ffffff]/85 to-[#92da97]/15"
            onSubmit={handleSubmit(onSubmit)}
        >
            <h1 className="font-roboto text-center mb-5 text-2xl font-extrabold text-gray-800">
                Formulario de Registro
            </h1>

            <div className="flex flex-col space-y-5">
                <Button
                    variant="contained"
                    component="label"
                    color="error"
                    startIcon={<PictureAsPdfIcon />}
                >
                    Selecciona tu CURP
                    <input
                        type="file"
                        accept="application/pdf"
                        hidden
                        onChange={handleCURPFileChange}
                        required
                    />
                </Button>
                <Button
                    variant="contained"
                    component="label"
                    color="secondary"
                    startIcon={<BadgeIcon />}
                >
                    Selecciona tu INE
                    <input
                        type="file"
                        accept="application/pdf"
                        hidden
                        onChange={handleINEFileChange}
                        required
                        className="text-center"
                    />
                </Button>
                <Button
                    variant="contained"
                    component="label"
                    color="primary"
                    startIcon={<InsertPhotoIcon />}
                >
                    Selecciona tu foto
                    <input
                        type="file"
                        accept="image/*"
                        hidden
                        onChange={handlePhotoFileChange}
                        required
                    />
                </Button>

                <TextField
                    id="curp"
                    label="CURP"
                    type="text"
                    variant="outlined"
                    required
                    {...register("curp")}
                    helperText="Introduce tu CURP."
                />

                <TextField
                    id="nombre"
                    label="Nombre"
                    type="text"
                    variant="outlined"
                    required
                    {...register("nombre")}
                    helperText="Introduce tu nombre."
                    inputProps={{
                        maxLength: 20,
                    }}
                />

                <TextField
                    id="apellido-paterno"
                    label="Apellido Paterno"
                    type="text"
                    variant="outlined"
                    required
                    {...register("apellido_paterno")}
                    helperText="Introduce tu apellido paterno."
                    inputProps={{
                        maxLength: 20,
                    }}
                />

                <TextField
                    id="apellido-materno"
                    label="Apellido Materno"
                    type="text"
                    variant="outlined"
                    required
                    {...register("apellido_materno")}
                    helperText="Introduce tu apellido materno."
                    inputProps={{
                        maxLength: 20,
                    }}
                />

                <div className="flex flex-col space-y-6 md:space-y-0 sm:flex-row sm:gap-5">
                    <FormControl className="w-full sm:w-1/2">
                        <InputLabel id="categoria-label">Categoria *</InputLabel>
                        <Select
                            labelId="categoria-label"
                            id="categoria"
                            label="Categoria"
                            value={watch("categoria") || ""}
                            {...register("categoria")}
                        >
                            <MenuItem value="" disabled>
                                Selecciona una categoría
                            </MenuItem>
                            <MenuItem value="1">Master</MenuItem>
                            <MenuItem value="2">Golden</MenuItem>
                            <MenuItem value="3">Diamante</MenuItem>
                        </Select>
                        <FormHelperText>Selecciona tu categoria.</FormHelperText>
                    </FormControl>

                    <TextField
                        id="fecha-nacimiento"
                        label="Fecha de nacimiento"
                        type="date"
                        variant="outlined"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        {...register("fecha_nacimiento")}
                        helperText="Introduce tu fecha de nacimiento."
                    />
                </div>

                <Button
                    variant="contained"
                    color="success"
                    type="submit"
                    endIcon={<SendIcon />}
                    disabled={!isFormValid}
                >
                    Registrar
                </Button>
            </div>
        </Box>
    );
}
