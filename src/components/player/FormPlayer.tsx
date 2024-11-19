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
import { Player, PlayerInputForm } from "../../types";
import { usePlayer } from "../../hooks/usePlayer";
import { ChangeEvent, useEffect } from "react";
import { useDarkMode } from "../../hooks/useDarkMode";
import { inputStyles } from "./styles";

export default function FormPlayer() {
    const { playerData, setPlayerData } = usePlayer();
    const { darkMode } = useDarkMode();

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
            ...formValues,
            foto: formValues.foto || null,
        } as Player);
    }, [formValues, setPlayerData]);

    // Función genérica para manejar cambios de archivos
    const handleFileChange =
        (field: keyof PlayerInputForm) => (event: ChangeEvent<HTMLInputElement>) => {
            const file = event.target.files?.[0];
            if (file) {
                setValue(field, file);
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
            autoComplete="off"
            noValidate
            className={`py-5 px-16 sm:px-16 rounded-xl shadow-xl transition-colors duration-300 ${
                darkMode ? "bg-dark_mode_secondary text-white" : "bg-white text-black"
            }`}
            onSubmit={handleSubmit(onSubmit)}
        >
            <h1 className="font-roboto text-center mb-5 text-2xl font-extrabold">
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
                        onChange={handleFileChange("curpFile")}
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
                        onChange={handleFileChange("ine")}
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
                        onChange={handleFileChange("foto")}
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
                    sx={inputStyles(darkMode)}
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
                    sx={inputStyles(darkMode)}
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
                    sx={inputStyles(darkMode)}
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
                    sx={inputStyles(darkMode)}
                />

                <div className="flex flex-col space-y-6 md:space-y-0 sm:flex-row sm:gap-5">
                    <FormControl className="w-full sm:w-1/2">
                        <InputLabel
                            id="categoria-label"
                            sx={{ color: darkMode ? "white" : "black" }}
                        >
                            Categoria *
                        </InputLabel>
                        <Select
                            labelId="categoria-label"
                            id="categoria"
                            label="Categoria"
                            value={watch("categoria") || ""}
                            {...register("categoria")}
                            sx={inputStyles(darkMode)}
                        >
                            <MenuItem value="" disabled>
                                Selecciona una categoría
                            </MenuItem>
                            <MenuItem value="1">Master</MenuItem>
                            <MenuItem value="2">Golden</MenuItem>
                            <MenuItem value="3">Diamante</MenuItem>
                        </Select>
                        <FormHelperText sx={{ color: darkMode ? "white" : "black" }}>
                            Selecciona tu categoria.
                        </FormHelperText>
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
                        sx={inputStyles(darkMode)}
                    />
                </div>

                <Button
                    variant="contained"
                    color="success"
                    type="submit"
                    endIcon={<SendIcon />}
                    disabled={!isFormValid}
                    sx={{ ":disabled": { backgroundColor: "#e8e4e4" } }}
                >
                    Registrar
                </Button>
            </div>
        </Box>
    );
}
