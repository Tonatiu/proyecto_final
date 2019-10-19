from django.db import models

class Tipousuario(models.Model):
    idtipousuario = models.AutoField(db_column='idTipoUsuario', primary_key=True)
    descripcion = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'tipousuario'

class Persona(models.Model):
    nombres = models.CharField(max_length=300)
    primerapellido = models.CharField(db_column='primerApellido', max_length=300)
    segundoapellido = models.CharField(db_column='segundoApellido', max_length=300, blank=True, null=True)   
    birthdate = models.DateField(db_column='birthDate')

    class Meta:
        managed = False
        db_table = 'persona'

class Usuario(models.Model):
    idusuario = models.AutoField(db_column='idUsuario', primary_key=True)
    alias = models.CharField(max_length=45)
    idpersona = models.ForeignKey(Persona, models.DO_NOTHING, db_column='idPersona')
    email = models.CharField(unique=True, max_length=300)
    passwd = models.CharField(max_length=300)
    idtipousuario = models.ForeignKey(Tipousuario, models.DO_NOTHING, db_column='idTipoUsuario')
    eliminado = models.BooleanField ()  # This field type is a guess.

    class Meta:
        managed = False
        db_table = 'usuario'

class Contacto(models.Model):
    telefono = models.CharField(max_length=300)
    email = models.CharField(max_length=300)
    idpersona = models.ForeignKey('Persona', models.DO_NOTHING, db_column='idPersona')

    class Meta:
        managed = False
        db_table = 'contacto'

class Direccion(models.Model):
    idcontacto = models.ForeignKey(Contacto, models.DO_NOTHING, db_column='idContacto')
    cp = models.IntegerField(blank=True, null=True)
    idestado = models.IntegerField(db_column='idEstado', blank=True, null=True)
    idmunicipio = models.IntegerField(db_column='idMunicipio', blank=True, null=True)
    idasentamiento = models.IntegerField(db_column='idAsentamiento', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'direccion'

class Cuenta(models.Model):
    idcuenta = models.AutoField(db_column='idCuenta', primary_key=True)
    fechaingreso = models.DateTimeField(db_column='fechaIngreso')
    activa = models.TextField()  # This field type is a guess.
    idusuario = models.ForeignKey('Usuario', models.DO_NOTHING, db_column='idUsuario')
    eliminado = models.BooleanField()  # This field type is a guess.
    fechasalida = models.DateTimeField(db_column='fechaSalida', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'cuenta'

class Keywords(models.Model):
    idkeywords = models.AutoField(db_column='idKeyWords', primary_key=True)
    descripcio = models.CharField(max_length=50)

    class Meta:
        managed = False
        db_table = 'keywords'

class Categoria(models.Model):
    idcategoria = models.AutoField(db_column='idCategoria', primary_key=True)
    descripcion = models.CharField(max_length=45)

    class Meta:
        managed = False
        db_table = 'categoria'


class Articulo(models.Model):
    idarticulo = models.AutoField(db_column='id', primary_key=True)
    nombrearticulo = models.CharField(db_column='nombreArticulo', max_length=250)
    descripcion = models.CharField(max_length=1000, blank=True, null=True)
    cantidad = models.IntegerField()
    costo = models.FloatField()
    eliminado = models.BooleanField()
    keywords = models.ManyToManyField(Keywords)
    categorias = models.ManyToManyField(Categoria)

    class Meta:
        managed = False
        db_table = 'articulo'

class Stock(models.Model):
    idstock = models.AutoField(db_column='idStock', primary_key=True)
    idcuenta = models.ForeignKey(Cuenta, models.DO_NOTHING, db_column='idCuenta')
    idarticulo = models.ForeignKey(Articulo, models.DO_NOTHING, db_column='idArticulo')
    fechaingreso = models.DateTimeField(db_column='fechaIngreso')
    eliminado = models.BooleanField()  # This field type is a guess.
    fechasalida = models.DateTimeField(db_column='fechaSalida', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'stock'

class Foto(models.Model):
    url = models.CharField(max_length=450)
    articulo = models.ForeignKey(Articulo, models.DO_NOTHING, db_column='idArticulo')

    class Meta:
        managed = False
        db_table = 'foto'