import { Box, Container, Link, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import chart from "../static/chart.png";

const average = (arr: number[]) => arr.reduce((sum, cur) => sum + cur, 0) / arr.length;
const process = (arr: number[]) => [...arr, Math.max(...arr), average(arr)];

export function ExamPage() {
    const years = [2017, 2018, 2019, 2020, 2021, "Максимальне", "Середнє"];
    const row1 = process([470327, 628296, 700617, 564315, 719771]);
    const row2 = process([2982920, 3558706, 3974564, 4194102, 5459574]);
    const row3 = process([15.77, 17.66, 17.63, 13.45, 13.18]);

    const row4 = ["XLкрит", "XLнебезп", "XLнездв", "XLздв", "XLопт"];
    const row5 = [18, 20, 23, 25, 30];

    return (
        <main>
            <Container>
                <Stack mt={2} justifyContent="center" alignItems="center">
                    <Typography variant="h4">Білет №25</Typography>
                    <Typography variant="h5">Інвестиційно-інноваційна безпека</Typography>
                    <Typography variant="h6">Валове нагромадження основного капіталу, відсотків ВВП</Typography>
                    <TableContainer component={Paper} sx={{ m: 2 }}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Рік</TableCell>
                                    {years.map(year => <TableCell align="center">{year}</TableCell>)}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell>
                                        Валове нагромадження основного капіталу, млн. грн. <br />
                                        <Link variant="overline" href={"https://ukrstat.gov.ua/operativ/operativ2021/vvp/kkv_vvp/arh_vn_ok2021_u.htm"}>Посилання на джерело</Link>
                                    </TableCell>
                                    {row1.map(value => <TableCell align="center">{value}</TableCell>)}
                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                        ВВП України, млн. грн. <br />
                                        <Link variant="overline" href={"https://ukrstat.gov.ua/imf/arhiv/nr/nr_pdpb2017_2020_u.htm"}>Посилання на джерело</Link>
                                    </TableCell>
                                    {row2.map(value => <TableCell align="center">{value}</TableCell>)}
                                </TableRow>
                                <TableRow>
                                    <TableCell>Валове нагромадження основного капіталу, відсотків ВВП</TableCell>
                                    {row3.map(value => <TableCell align="center">{value}</TableCell>)}
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <Box m={2}>
                        <img src={chart}></img>
                    </Box>
                    <TableContainer component={Paper} sx={{ m: 2 }}>
                        <Table size="small">
                            <TableHead>
                                <TableRow>
                                    <TableCell colSpan={5} align="center">Характеристичні значення індикатора</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableHead>
                                <TableRow>
                                    {row4.map(year => <TableCell align="center">{year}</TableCell>)}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    {row5.map(year => <TableCell align="center">{year}</TableCell>)}
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <Typography m={2}>Висновок: значення індикатору нижче критично допустимого, що свідчить про високу небезпеку та ризик у сфері інвестиційно-інноваційної безпеки</Typography>
                </Stack>
            </Container>
        </main >
    );
}