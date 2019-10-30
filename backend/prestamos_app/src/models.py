from django.db import models
from .custom_types import EncryptedField

class Tipousuario(models.Model):
    idtipousuario = models.AutoField(db_column='idTipoUsuario', primary_key=True)
    descripcion = models.CharField(max_length=100)

    def __str__(self):
        return self.descripcion

    class Meta:
        managed = False
        db_table = 'tipousuario'

class Persona(models.Model):
    idpersona = models.AutoField(db_column='idPersona', primary_key=True)
    nombres = EncryptedField(max_length=300)
    primerapellido = EncryptedField(db_column='primerApellido', max_length=300)
    segundoapellido = EncryptedField(db_column='segundoApellido', max_length=300, blank=True, null=True) 
    birthdate = models.DateField(db_column='birthDate')

    def __str__(self):
        return "{} {} {}".format(self.nombres, self.primerapellido, self.segundoapellido)

    class Meta:
        managed = False
        db_table = 'persona'

class Contacto(models.Model):
    idcontacto = models.AutoField(db_column='idContacto', primary_key=True)
    telefono = models.CharField(max_length=300)
    email = models.CharField(max_length=300)
    persona = models.ForeignKey(Persona, models.DO_NOTHING, db_column='idPersona')
    class Meta:
        managed = False
        db_table = 'contacto'

class Direccion(models.Model):
    iddireccion = models.AutoField(db_column='idDireccion', primary_key=True)
    idcontacto = models.ForeignKey(Contacto, models.DO_NOTHING, db_column='idContacto')
    cp = models.IntegerField(blank=True, null=True)
    idestado = models.IntegerField(db_column='idEstado', blank=True, null=True)
    idmunicipio = models.IntegerField(db_column='idMunicipio', blank=True, null=True)
    idasentamiento = models.IntegerField(db_column='idAsentamiento', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'direccion'

class Usuario(models.Model):
    idusuario = models.AutoField(db_column='idUsuario', primary_key=True)
    alias = models.CharField(max_length=45)
    persona = models.ForeignKey(Persona, models.DO_NOTHING, db_column='idPersona', null=True, blank=True)
    email = EncryptedField(db_column='email', max_length=300, unique=True)
    passwd = EncryptedField(db_column='passwd', max_length=300)
    tipousuario = models.ForeignKey(Tipousuario, models.DO_NOTHING, db_column='idTipoUsuario', related_name='tipousuario')
    eliminado = models.BooleanField ()  # This field type is a guess.

    def __str__(self):
        return self.alias

    class Meta:
        managed = False
        db_table = 'usuario'

class Cuenta(models.Model):
    idcuenta = models.AutoField(db_column='idCuenta', primary_key=True)
    fechaingreso = models.DateTimeField(db_column='fechaIngreso')
    activa = models.BooleanField(db_column='activa')  # This field type is a guess.
    usuario = models.ForeignKey(Usuario, models.DO_NOTHING, db_column='idUsuario')
    eliminado = models.BooleanField(db_column='eliminado')  # This field type is a guess.
    fechasalida = models.DateTimeField(db_column='fechaSalida', blank=True, null=True)
    class Meta:
        managed = False
        db_table = 'cuenta'

class Keyword(models.Model):
    idkeyword = models.AutoField(db_column='idKeyWord', primary_key=True)
    descripcion = models.CharField(max_length=50)

    def __str__(self):
        return self.descripcion

    class Meta:
        managed = False
        db_table = 'keyword'

class Categoria(models.Model):
    idcategoria = models.AutoField(db_column='idCategoria', primary_key=True)
    descripcion = models.CharField(max_length=45)
    def __str__(self):
        return self.descripcion
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
    keywords = models.ManyToManyField(Keyword)
    categorias = models.ManyToManyField(Categoria)

    def __str__(self):
        return self.nombrearticulo

    class Meta:
        managed = False
        db_table = 'articulo'

class Stock(models.Model):
    idstock = models.AutoField(db_column='idStock', primary_key=True)
    cuenta = models.ForeignKey(Cuenta, models.DO_NOTHING)
    articulos = models.ManyToManyField(Articulo, blank=True)
    class Meta:
        managed = False
        db_table = 'stock'

class Cart(models.Model):
    idcart = models.AutoField(db_column='idStock', primary_key=True)
    cuenta = models.ForeignKey(Cuenta, models.DO_NOTHING)
    articulos = models.ManyToManyField(Articulo, blank=True)
    class Meta:
        managed = False
        db_table = 'cart'

class Foto(models.Model):
    idfoto = models.AutoField(db_column='idfoto', primary_key=True)
    url = models.CharField(max_length=450)
    articulo = models.ForeignKey(Articulo, models.DO_NOTHING)

    def __str__(self):
        return self.url

    class Meta:
        managed = False
        db_table = 'foto'