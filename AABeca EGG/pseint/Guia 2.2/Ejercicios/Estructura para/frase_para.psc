Algoritmo frase_para
	
	definir frase Como caracter
	definir i como entero
	
	Escribir "Ingresa una frase"
	leer frase
	
	escribir longitud(frase)
	
	para i = 0 Hasta Longitud(frase) Hacer
		
		Escribir Sin Saltar Subcadena(frase, i-1, i-1), " "
		
	FinPara
FinAlgoritmo
