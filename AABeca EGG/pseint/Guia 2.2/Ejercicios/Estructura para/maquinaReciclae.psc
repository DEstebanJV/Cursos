Algoritmo Robot_botella
	
	Definir usuario, contrasena Como Caracter
	Definir loggin Como Logico
	Definir intentos Como Entero
	intentos = 0
	Escribir "Ingrese el usuario"
	Leer usuario
	
	si usuario = "Albus_D" Entonces
		Escribir "Ingrese su contrase�a"
		Leer contrasena
		
		Mientras intentos <= 3 Hacer
			
			si contrasena = "carameloDeLimon" Entonces
				loggin = Verdadero
				
				Escribir "Haz ingresado con exito"
				
			SiNo
				Escribir "Su contrase�a es incorrecta, por favor ingresela de nuevo"
				loggin = Falso
				
			FinSi
		FinMientras
		
	FinSi
	
FinAlgoritmo
