Algoritmo condicional_doble
	Definir hora Como Real
	Definir ingresoHora Como Logico
	Escribir "Ingresa la hora de llegada a zoom"
	Leer hora
	ingresoHora = (hora >= 6.30)  O (hora <= 7.15) 
	Si ingresoHora Entonces
		Escribir  "ingresaste a tiempo"
	SiNo
		Escribir  "llegaste tarde"
	Fin Si
FinAlgoritmo
