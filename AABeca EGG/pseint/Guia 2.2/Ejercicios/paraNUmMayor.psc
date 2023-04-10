Algoritmo paraNUmMayor
	Definir i, numIngreso, maximo, numIngresar Como Entero
	maximo = 0
	escribir "Cuantos numeros desea ingresar"
	leer numIngresar
	para i = 1 hasta numIngresar Con Paso 1 Hacer
		Escribir "digita un numero"
		leer numIngreso
		si numIngreso > maximo  Entonces
			maximo = numIngreso
		FinSi
	FinPara
	Escribir maximo
FinAlgoritmo

