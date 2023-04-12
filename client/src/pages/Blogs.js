import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Box, Button, FormControl, InputLabel, MenuItem, Modal, Select, TextField } from '@mui/material';

const columns = [
    { id: 'createdBy', label: 'Created By', minWidth: 170 },
    { id: 'title', label: 'Title', minWidth: 100, align: 'center' },
    {
        id: 'blogType',
        label: 'Blog Type',
        minWidth: 170,
        align: 'center',

    },
    {
        id: 'description',
        label: 'Description',
        minWidth: 170,
        align: 'left',
    },
    {
        id: 'action',
        label: 'Action',
        minWidth: 170,
        align: 'center',
        format: (value) => value.toFixed(2),
    },
];

function createData(createdBy, title, blogType, description) {
    const action = blogType / description;
    return { createdBy, title, blogType, description, action };
}

const rows = [

    createData('Canada', 'CA', 37602103, 9984670),
    createData('Australia', 'AU', 25475400, 7692024),
    createData('Germany', 'DE', 83019200, 357578),
    createData('Ireland', 'IE', 4857000, 70273),
    createData('Mexico', 'MX', 126577691, 1972550),
];
const categoryOptions = [
    "Food blogs",
    "Travel blogs",
    "Health and fitness blogs",
    "Lifestyle blogs",
    "Fashion and beauty blogs",
    "Photography blogs",
    "Personal blogs",
    "DIY craft blogs"
]
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 450,
    bgcolor: 'background.paper',
    border: 0,
    boxShadow: 24,
    borderRadius: "2%",
    p: 4,
};

export default function Blogs() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [category, setCategory] = React.useState('')
    const [title, setTitle] = React.useState('')
    const [description, setDescription] = React.useState('')
    const [selectedImage, setSelectedImage] = React.useState('')

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const onAddBlogHandler = (event) => {
        event.preventDefault()
        console.log({
            category, title, description, selectedImage
        });
        handleClose()
    }

    return (
        <div style={{ paddingTop: 85 }}>
            <Button onClick={handleOpen} sx={{ marginBottom: 3, marginLeft: '4rem' }} variant="contained">Add New Blog</Button>
            <div style={{ height: '70vh', width: "100vw", display: 'flex', justifyContent: 'center', alignItems: 'start', }}>
                <Paper sx={{ width: '90%', overflow: 'hidden' }}>
                    <TableContainer sx={{ maxHeight: 400 }}>
                        <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                                <TableRow>
                                    {columns.map((column, pos) => (
                                        <TableCell
                                            key={pos}
                                            align={column.align}
                                            style={{ minWidth: column.minWidth, background: "#282828", color: '#ffffff', fontWeight: 900 }}
                                        >
                                            {column.label}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            </TableHead>
                            <TableBody sx={{ background: '#b3b3b3' }}>
                                {rows
                                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map((row, pos) => {
                                        return (
                                            <TableRow hover role="checkbox" tabIndex={-1} key={pos}>
                                                {columns.map((column) => {
                                                    const value = row[column.id];
                                                    return (
                                                        <TableCell sx={{ fontWeight: 550 }} key={column.id} align={column.align}>
                                                            {column.format && typeof value === 'number'
                                                                ? column.format(value)
                                                                : value}
                                                        </TableCell>
                                                    );
                                                })}
                                            </TableRow>
                                        );
                                    })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination
                        style={{ background: '#282828', color: "#ffffff" }}
                        rowsPerPageOptions={[10, 25, 100]}
                        component="div"
                        count={rows.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </Paper>
            </div>
            <div>
                <Modal
                    open={open}
                    onClose={handleClose}
                >
                    <Box sx={style}
                        component="form"
                        noValidate
                        autoComplete="off"
                    >
                        <div style={{ display: 'grid', gridTemplateRows: 'auto' }}>
                            <InputLabel style={{ marginBottom: '25px', fontSize: '1.5rem', display: 'flex', alignSelf: 'center' }} >Add New Blog</InputLabel>
                            <FormControl fullWidth style={{ marginBottom: '20px' }}>
                                <InputLabel id="demo-simple-select-label">Select Category</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    label="Select Category"
                                    onChange={(e) => setCategory(e.target.value)}
                                    value={category || "Food blogs"}
                                >{
                                        categoryOptions.map((item, pos) => {
                                            return (
                                                <MenuItem key={pos} value={item}>{item}</MenuItem>
                                            )
                                        })
                                    }
                                </Select>
                            </FormControl>
                            <TextField
                                required
                                id="outlined-required"
                                label="Title"
                                style={{ marginBottom: '20px' }}
                                onChange={(e) => setTitle(e.target.value)}
                                value={title}
                            />
                            <TextField
                                required
                                id="outlined-required"
                                label="Description"
                                style={{ marginBottom: '20px' }}
                                onChange={(e) => setDescription(e.target.value)}
                                value={description}
                            />
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <Button sx={{ width: "5rem", height: '2rem', marginBottom: "20px" }} variant="contained" component="label">
                                    Upload
                                    <input onChange={(e) => setSelectedImage(e.target.files[e.target.files.length - 1])} accept="image/*" multiple type="file" />
                                </Button>
                                <p style={{ fontSize: '0.8rem', marginLeft: '5px' }}>{selectedImage.name}</p>
                            </div>
                            <Button onClick={onAddBlogHandler} variant="contained">Add Blog</Button>
                        </div>
                    </Box>
                </Modal>
            </div>
        </div>
    );
}