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
import { Player, PlayerInputForm, PlayerResponse } from "../../types";
import { usePlayer } from "../../hooks/usePlayer";
import { ChangeEvent, useEffect } from "react";
import { useDarkMode } from "../../hooks/useDarkMode";
import { inputStyles } from "./styles";
import { useMutation } from "@tanstack/react-query";
import { registerPlayer, uploadPDF } from "../../api/player/PlayerAPI";
import { toast } from "react-toastify";

export default function FormPlayer() {
    const { playerData, setPlayerData, initialValuesPlayer } = usePlayer();
    const { darkMode } = useDarkMode();

    const initialValues: PlayerInputForm = {
        equipo: 1,
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
        setPlayerData({
            ...playerData,
            ...formValues,
            carnet: curpData
                ? curpData.abreviatura +
                  playerData.categoria +
                  String(curpData?.numero_jugadores).padStart(3, "0")
                : "???",
            foto: formValues.foto || null,
        });
    }, [formValues, setPlayerData]);

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
                            {curpData?.categoria.map((categoria) => (
                                <MenuItem
                                    key={categoria.id_categoria}
                                    value={categoria.id_categoria}
                                >
                                    {categoria.nombre}
                                </MenuItem>
                            ))}
                        </Select>
                        <FormHelperText sx={{ color: darkMode ? "white" : "black" }}>
                            Selecciona tu categoria.
                        </FormHelperText>
                    </FormControl>

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
