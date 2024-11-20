import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TablePagination from "@mui/material/TablePagination";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button"; // Importamos el botón
import { useDarkMode } from "../../hooks/useDarkMode"; // Suponiendo que tienes el hook para el darkMode

// Función para crear datos (esto puede ser reemplazado por tu consulta a la base de datos)
function createData(
    firstName: string,
    lastName: string,
    age: string,
    fullName: string,
    categoria: string,
    fecha_nacimiento: string,
    años_registro: number
) {
    return { firstName, lastName, age, fullName, categoria, fecha_nacimiento, años_registro };
}

const rows = [
    createData("Alejandro", "Estrada", "Ponce", "EAPA021129HJCNLA1", "Master", "2002-11-29", 21),
    createData("Cersei", "Lannister", "31", "N/A", "Queen", "1975-01-01", 30),
    createData("Jaime", "Lannister", "31", "N/A", "Knight", "1975-01-01", 30),
    createData("Arya", "Stark", "11", "N/A", "Young", "2013-02-01", 10),
    createData("Daenerys", "Targaryen", "N/A", "N/A", "Princess", "1992-01-01", 32),
    createData("Melisandre", "N/A", "150", "N/A", "Priestess", "0000-01-01", 100),
    // ... puedes agregar más datos aquí
];

export default function DenseTable() {
    const { darkMode } = useDarkMode(); // Hook para el modo oscuro

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [selectedRows, setSelectedRows] = React.useState<any[]>([]); // Estado para las filas seleccionadas
    const [selectAll, setSelectAll] = React.useState(false); // Estado para el checkbox del encabezado

    const handleChangePage = (
        event: React.MouseEvent<HTMLButtonElement> | null,
        newPage: number
    ) => {
        event && event.preventDefault(); // Prevenir el comportamiento por defecto
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0); // Regresar a la primera página si se cambia la cantidad de filas por página
    };

    const handleRowSelection = (event: React.ChangeEvent<HTMLInputElement>, row: any) => {
        // Si la casilla es marcada, agregar la fila a las seleccionadas
        if (event.target.checked) {
            setSelectedRows([...selectedRows, row]);
        } else {
            // Si la casilla es desmarcada, quitar la fila de las seleccionadas
            setSelectedRows(selectedRows.filter((selectedRow) => selectedRow !== row));
        }
    };

    const handleSelectAll = (event: React.ChangeEvent<HTMLInputElement>) => {
        // Si el checkbox del encabezado es marcado, seleccionamos todas las filas de la página actual
        if (event.target.checked) {
            const rowsInPage = rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
            setSelectedRows(rowsInPage); // Seleccionamos todas las filas visibles
        } else {
            setSelectedRows([]); // Desmarcamos todas las filas
        }
        setSelectAll(event.target.checked); // Actualizamos el estado del checkbox de encabezado
    };

    const handlePrintSelected = () => {
        console.log("Filas seleccionadas:", selectedRows);
    };

    return (
        <div>
            <TableContainer
                component={Paper}
                sx={{
                    backgroundColor: darkMode ? "#121212" : "#ffffff",
                    borderRadius: "8px",
                    boxShadow: darkMode
                        ? "0px 4px 6px rgba(255, 255, 255, 0.3)"
                        : "0px 4px 6px rgba(0, 0, 0, 0.3)",
                }}
            >
                <Table sx={{ minWidth: "100%" }} size="medium">
                    <TableHead>
                        <TableRow
                            sx={{
                                backgroundColor: darkMode ? "#1a1f26" : "#e0e0e0",
                                color: darkMode ? "#ffffff" : "#000000",
                                textAlign: "center",
                            }}
                        >
                            <TableCell padding="checkbox">
                                <Checkbox
                                    color="primary"
                                    checked={selectAll}
                                    onChange={handleSelectAll} // Seleccionamos/desmarcamos todas las filas de la página
                                />
                            </TableCell>
                            <TableCell>Nombre</TableCell>
                            <TableCell align="center">Apellido Paterno</TableCell>
                            <TableCell align="center">Apellido Materno</TableCell>
                            <TableCell align="center">CURP</TableCell>
                            <TableCell align="center">Categoria</TableCell>
                            <TableCell align="center">Fecha de Nacimiento</TableCell>
                            <TableCell align="center">Años al Registro</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) // Paginación de los datos
                            .map((row) => (
                                <TableRow key={row.firstName}>
                                    <TableCell padding="checkbox">
                                        <Checkbox
                                            color="primary"
                                            onChange={(e) => handleRowSelection(e, row)}
                                            checked={selectedRows.includes(row)} // Verifica si la fila está seleccionada
                                        />
                                    </TableCell>
                                    <TableCell>{row.firstName}</TableCell>
                                    <TableCell align="center">{row.lastName}</TableCell>
                                    <TableCell align="center">{row.age}</TableCell>
                                    <TableCell align="center">{row.fullName}</TableCell>
                                    <TableCell align="center">{row.categoria}</TableCell>
                                    <TableCell align="center">{row.fecha_nacimiento}</TableCell>
                                    <TableCell align="center">{row.años_registro}</TableCell>
                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]} // Opciones de filas por página
                    component="div"
                    count={rows.length} // Total de filas (en tu caso, podrías hacer una consulta para obtener el total de registros desde la BD)
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </TableContainer>
            {/* Botón para imprimir las filas seleccionadas */}
            <Button
                variant="contained"
                color="primary"
                sx={{ marginTop: "10px" }}
                onClick={handlePrintSelected}
            >
                Imprimir Seleccionados
            </Button>
        </div>
    );
}
