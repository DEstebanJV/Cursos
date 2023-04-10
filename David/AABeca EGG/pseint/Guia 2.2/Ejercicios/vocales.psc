Algoritmo vocales
	///Diseña un programa que guarde una vocal secreta en una variable, debemos pedirle al usuario
	///que intente adivinar la vocal secreta, e intentará tantas veces como sea necesario hasta que la adivine.
	Definir vocalSecreta, vocal Como Caracter
	vocalSecreta = "a"
	vocalSecreta= minusculas(vocalSecreta)
	
	Escribir "Adivina la vocal secreta"
	Escribir "Elige entre a, e, i, o, u"
	leer vocal
	Mientras vocal <> vocalSecreta Hacer
		Escribir  "no es la vocal secreta intenta de nuevo"
		Leer vocal
	FinMientras
	
	Escribir "Esa es la vocal secreta!"
	
FinAlgoritmo
