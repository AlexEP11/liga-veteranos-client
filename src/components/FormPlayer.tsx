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
import PersonIcon from "@mui/icons-material/Person";

export default function FormPlayer() {
    return (
        <Box
            component="form"
            autoComplete="false"
            noValidate
            className="py-5 px-11 sm:px-16 rounded-xl shadow-xl bg-white bg-gradient-to-b from-[#ffffff]/85 to-[#92da97]/15  "
        >
            <h1 className="font-roboto text-center mb-5 text-2xl font-extrabold text-gray-800">
                Formulario de Registro
            </h1>

            <div className="flex flex-col space-y-5">
                <TextField
                    id="curp"
                    label="CURP"
                    variant="outlined"
                    helperText="Introduce tu CURP."
                    required
                    fullWidth
                />

                <TextField
                    id="nombre"
                    label="Nombre"
                    variant="outlined"
                    helperText="Introduce tu nombre."
                    required
                    fullWidth
                />

                <TextField
                    id="apellido-paterno"
                    label="Apellido Paterno"
                    variant="outlined"
                    helperText="Introduce tu apellido paterno."
                    required
                    fullWidth
                />

                <TextField
                    id="apellido-materno"
                    label="Apellido Materno"
                    variant="outlined"
                    helperText="Introduce tu apellido materno."
                    required
                    fullWidth
                />

                <div className="flex flex-col space-y-6 md:space-y-0 sm:flex-row sm:gap-5">
                    <FormControl className="w-full sm:w-1/2">
                        <InputLabel id="categoria-label">Categoria *</InputLabel>
                        <Select
                            labelId="categoria-label"
                            id="categoria"
                            label="Categoria"
                            required
                            fullWidth
                        >
                            <MenuItem value={10}>Master</MenuItem>
                            <MenuItem value={20}>Golden</MenuItem>
                            <MenuItem value={30}>Diamante</MenuItem>
                        </Select>
                        <FormHelperText>Selecciona la categoria.</FormHelperText>
                    </FormControl>

                    <TextField
                        id="fecha-nacimiento"
                        label="Fecha de nacimiento"
                        type="date"
                        variant="outlined"
                        required
                        helperText="Selecciona tu fecha de nacimiento."
                        InputLabelProps={{
                            shrink: true,
                        }}
                        fullWidth
                    />
                </div>

                <div className="flex justify-between">
                    <label htmlFor="subir-foto">
                        <Button
                            variant="contained"
                            color="inherit"
                            component="span"
                            endIcon={<PersonIcon />}
                        >
                            Foto
                        </Button>
                    </label>
                    <input id="subir-foto" type="file" className="hidden" accept="image/*" />

                    <Button
                        variant="contained"
                        color="success"
                        type="submit"
                        endIcon={<SendIcon />}
                    >
                        Registrar
                    </Button>
                </div>
            </div>
        </Box>
    );
}
