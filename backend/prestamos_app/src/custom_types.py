from django.db import models, connection as conn
from .crypto_properties import CRYPTO_PASS

class EncryptedField(models.CharField):
    description = "Un campo cifrado"
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)

    def db_type(self, connection):
        return 'varbinary(%s)' % self.max_length
    
    def from_db_value(self, value, expression, connection):
        if value is None:
            return None
        if isinstance(value, bytes):
            return value.decode('utf-8')
        with connection.cursor() as cursor:
            cursor.execute("SELECT DES_ENCRYPT('%s', '%s')" % (value, CRYPTO_PASS))
            encryptedValue = cursor.fetchone()
        return encryptedValue
            
    def to_python(self, value):
        if value is None:
            return None
        
        with conn.cursor() as cursor:
            cursor.execute("SELECT CAST(DES_DECRYPT('%s', '%s') AS VARCHAR(250))" % (value, CRYPTO_PASS))
            decryptedValue = cursor.fetchone()
        return decryptedValue