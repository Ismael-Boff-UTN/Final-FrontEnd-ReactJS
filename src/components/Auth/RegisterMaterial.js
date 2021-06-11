import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import FastfoodIcon from "@material-ui/icons/Fastfood";
//
import { useDispatch } from "react-redux";
import { Link as LinkRouter } from "react-router-dom";
import { startRegister } from "../../actions/auth";
import swal from "sweetalert2";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://genshin.gg/">
        Program1.h -
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage:
      "url(https://images.unsplash.com/photo-1553356084-58ef4a67b2a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", //Arregla Un Error De IE11
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const RegisterMaterial = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [formValues, setFromValues] = useState({
    nombre: "",
    apellido: "",
    email: "",
    password: "",
    telefono: "",

    img: "",
    rol: "USER_ROLE",
  });

  const {
    nombre,
    apellido,
    email,
    password,
    telefono,
    rol,
    localidad,
    calle,
    numero,
    domicilio,
    img,
  } = formValues;

  const handleInputChange = ({ target }) => {
    setFromValues({
      ...formValues,
      [target.name]: target.value,

      domicilio: {
        calle,
        [target.name]: target.value,
        localidad,
        [target.name]: target.value,
        numero,
        [target.name]: target.value,
      },
    });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();

    console.log(formValues);
    dispatch(
      startRegister(
        nombre,
        apellido,
        email,
        password,
        telefono,
        rol,
        domicilio,
        img
      )
    );
  };
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <FastfoodIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Registro Nuevo Cliente
          </Typography>
          <form className={classes.form} noValidate onSubmit={handleSubmitForm}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="nombre"
              label="Nombre"
              name="nombre"
              autoFocus
              onChange={handleInputChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required="true"
              fullWidth
              name="apellido"
              label="Apellido"
              type="text"
              id="apellido"
              onChange={handleInputChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required="true"
              fullWidth
              name="email"
              label="E-Mail"
              type="text"
              id="email"
              onChange={handleInputChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required="true"
              fullWidth
              name="password"
              label="Contraseña"
              type="password"
              id="password"
              onChange={handleInputChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required="true"
              fullWidth
              name="telefono"
              label="Telefono"
              type="text"
              id="telefono"
              onChange={handleInputChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required="true"
              fullWidth
              name="calle"
              label="Calle"
              type="text"
              id="calle"
              onChange={handleInputChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required="true"
              fullWidth
              name="localidad"
              label="Localidad"
              type="text"
              id="localidad"
              onChange={handleInputChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required="true"
              fullWidth
              name="numero"
              label="Numero"
              type="number"
              id="numero"
              onChange={handleInputChange}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              className={classes.submit}
            >
              Crear Cuenta
            </Button>

            <Grid container>
              <Grid item xs></Grid>
              <Grid item>
                <Link
                  component={LinkRouter}
                  to="/"
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="secondary"
                  className={classes.submit}
                >
                  Ya Tienes Cuenta? Inicia Sesión!
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
};

export default RegisterMaterial;
