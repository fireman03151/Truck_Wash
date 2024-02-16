import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { withGoogleMap, withScriptjs, GoogleMap } from "react-google-maps"
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import StickyFooter from '../footer/footer'
const MapComponent = withGoogleMap(props => (
    <GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }} />
));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));
const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function createData(name, calories, fat, carbs, protein, state) {
    return { name, calories, fat, carbs, protein, state };
}

const rows = [
    createData('Aiden', "10:30", "Name", "xxxx", "xxx", "complete"),

];

export default function CustomizedTables() {
    return (
        <React.Fragment>
            <CssBaseline />
            <div style={{ marginTop: "120px", width: "100%" }} minWidth="sl">
                <CssBaseline />
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    justifyContent="center"

                >
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2539.501242822434!2d-104.58563572314864!3d50.46901168602675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x531c1fa7080a1679%3A0x27e82440887ddbb!2s625%20McDonald%20St%2C%20Regina%2C%20SK%20S4N%204X1%2C%20Canada!5e0!3m2!1sen!2s!4v1708079587189!5m2!1sen!2s" width="600" height="450" allowFullscreen="" loading="lazy" reFerrerpolicy="no-referrer-when-downgrade"></iframe>

                </Grid>
                <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                    justifyContent="center"

                >
                    <TableContainer style={{ marginTop: "40px" }} component={Paper} maxWidth="sl">
                        <Table sx={{ minWidth: 500 }} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell>CustomerName</StyledTableCell>
                                    <StyledTableCell align="right">Time</StyledTableCell>
                                    <StyledTableCell align="right">Driver</StyledTableCell>
                                    <StyledTableCell align="right">CarNumber</StyledTableCell>
                                    <StyledTableCell align="right">CARLocation</StyledTableCell>
                                    <StyledTableCell align="right">STATE</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <StyledTableRow key={row.name}>
                                        <StyledTableCell component="th" scope="row">
                                            {row.name}
                                        </StyledTableCell>
                                        <StyledTableCell align="right">{row.calories}</StyledTableCell>
                                        <StyledTableCell align="right">{row.fat}</StyledTableCell>
                                        <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                                        <StyledTableCell align="right">{row.protein}</StyledTableCell>
                                        <StyledTableCell align="right">{row.state}</StyledTableCell>
                                    </StyledTableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </div>

            {/* <StickyFooter /> */}

        </React.Fragment>

    );
}