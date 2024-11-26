import { Box, TextField, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { Player, PlayerInputForm, PlayerResponse } from "@/types";
import { usePlayer } from "@/hooks/usePlayer";
import { ChangeEvent, useEffect } from "react";
import { useDarkMode } from "@/hooks/useDarkMode";
import { inputStyles } from "./styles";
import { useMutation } from "@tanstack/react-query";
import { registerPlayer, uploadPDF } from "@/api/player/PlayerAPI";
import { toast } from "react-toastify";
import SendIcon from "@mui/icons-material/Send";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import BadgeIcon from "@mui/icons-material/Badge";

export default function FormPlayer() {
    const { playerData, setPlayerData, initialValuesPlayer } = usePlayer();
    const { darkMode } = useDarkMode();

    const initialValues: PlayerInputForm = {
        equipo: 1,
        curp: "",
        nombre: "",
        apellido_paterno: "",
        apellido_materno: "",
        categoria: "1", // Poner la categoria del fetch
        fecha_nacimiento: "",
        foto: null,
        ine: null,
        curpFile: null,
    };

    const { register, handleSubmit, reset, setValue, watch } = useForm<PlayerInputForm>({
        defaultValues: initialValues,
    });

    const formValues = watch(); // Observar valores del formulario

    // Función genérica para manejar cambios de archivos
    const handleFileChange =
        (field: keyof PlayerInputForm) => (event: ChangeEvent<HTMLInputElement>) => {
            const file = event.target.files?.[0];
            if (file) {
                setValue(field, file);
                if (field === "curpFile") {
                    PDF({ file, equipo: playerData.equipo }); // Ahora pasas un objeto
                }
            }
        };

    const {
        mutate: PDF,
        data: curpData,
        reset: resetPDF,
    } = useMutation<PlayerResponse, Error, { file: File; equipo: Player["equipo"] }>({
        mutationFn: uploadPDF,
        onSuccess: (data: PlayerResponse) => {
            toast.success(data.message);
            setValue("curp", data.curp);
            setValue("nombre", data.nombre);
            setValue("apellido_paterno", data.apellido_paterno);
            setValue("apellido_materno", data.apellido_materno);
            setValue("fecha_nacimiento", data.fecha_nacimiento);
        },
    });

    useEffect(() => {
        const updatedData = {
            ...playerData,
            ...formValues,
            carnet: curpData
                ? curpData.abreviatura +
                  playerData.categoria +
                  String(curpData?.numero_jugadores).padStart(3, "0")
                : "???",
            foto: formValues.foto || null,
        };

        // Solo actualiza el estado si hay cambios
        if (JSON.stringify(playerData) !== JSON.stringify(updatedData)) {
            setPlayerData(updatedData);
        }
    }, [formValues, curpData, playerData, setPlayerData]);

    const { mutate: createPlayer } = useMutation({
        mutationFn: registerPlayer,
        onSuccess: (data) => {
            toast.success(data.message);
        },
        onError: (error) => {
            toast.error(error.message);
        },
    });

    const onSubmit = (data: PlayerInputForm) => {
        createPlayer(data);
        resetPDF();
        reset();
        setPlayerData({ ...initialValuesPlayer });
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
                    {formValues.curpFile ? formValues.curpFile.name : "Selecciona tu CURP"}
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
                    {formValues.ine ? formValues.ine.name : "Selecciona tu INE"}
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
                    {formValues.foto ? formValues.foto.name : "Selecciona tu foto"}

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
                    disabled
                    {...register("curp")}
                    sx={inputStyles(darkMode)}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />

                <TextField
                    id="nombre"
                    label="Nombre"
                    type="text"
                    variant="outlined"
                    required
                    disabled
                    sx={inputStyles(darkMode)}
                    {...register("nombre")}
                    inputProps={{
                        maxLength: 20,
                    }}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />

                <TextField
                    id="apellido-paterno"
                    label="Apellido Paterno"
                    type="text"
                    variant="outlined"
                    required
                    disabled
                    {...register("apellido_paterno")}
                    sx={inputStyles(darkMode)}
                    inputProps={{
                        maxLength: 20,
                    }}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />

                <TextField
                    id="apellido-materno"
                    label="Apellido Materno"
                    type="text"
                    variant="outlined"
                    required
                    disabled
                    {...register("apellido_materno")}
                    sx={inputStyles(darkMode)}
                    inputProps={{
                        maxLength: 20,
                    }}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />

                <TextField
                    id="fecha-nacimiento"
                    label="Fecha de nacimiento"
                    variant="outlined"
                    required
                    disabled
                    {...register("fecha_nacimiento")}
                    sx={inputStyles(darkMode)}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />

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
