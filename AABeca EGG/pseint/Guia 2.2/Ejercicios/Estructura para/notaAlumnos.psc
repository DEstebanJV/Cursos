Algoritmo nota_alumnos
	definir nombre, nombre2 Como Caracter
	definir nota1, nota2, nota3, nfinal, nalumnos, promedio, porciento1, porciento2, porciento3, mayorExposiciones Como Real
	definir i Como Entero
	mayorExposiciones = 0
	Escribir "Ingrese la cantidad de alumnos"
	Leer nalumnos
	
	para i = 1 hasta nalumnos hacer
		Escribir "Ingrese el nombre del Alumno:"
		leer nombre
		Escribir "Ingrese las tres notas del alumnos:"
		Escribir "Nota trabajo integrador 35%:" Sin Saltar
		leer nota1
		Escribir "Nota exposiciones 25%:" Sin Saltar
		leer nota2
		Escribir "Nota Parcial 40%:" Sin Saltar
		leer nota3
		
		porciento1 = (nota1*35)/100
		porciento2 = (nota2*25)/100
		porciento3 = (nota3*40)/100
		nfinal = porciento1+porciento2+porciento3
		promedio = nfinal/3
		Escribir "La calificación final es: ", nfinal
		
		si nfinal < 6.5 Entonces
			Escribir  "Lo sentimos ", nombre, " reprobaste el curso"
		FinSi
		si nota1 > 7.5 entonces
			Escribir  "Tu nota de trabajo integrador es buena"
		FinSi
		si nota2 > mayorExposiciones Entonces
			mayorExposiciones = nota2
			Escribir "la mayor calificacion de la nota de exposiciones fue: ", mayorExposiciones
				
		FinSi
	FinPara
	
FinAlgoritmo
