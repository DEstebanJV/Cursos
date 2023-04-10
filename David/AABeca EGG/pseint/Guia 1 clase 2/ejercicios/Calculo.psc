Algoritmo Calculo
	Definir n,unidades,decenas,centenas Como Entero
	Definir validacion como logico 
	Escribir "Ingresa un numero"
	leer n
    validacion = ( n > 0) Y ( n < 1000)
	Si validacion Entonces
		unidades = n mod 10
		n = trunc(n/10)
		decenas = n mod 10
		n = trunc(n/10)
		centenas = n 
		Escribir "Centenas", centenas
		Escribir "Decenas", decenas
		Escribir "Unidades", unidades
	SiNo
		Escribir "El numero ingresado no es valido" 
	Fin Si
FinAlgoritmo
