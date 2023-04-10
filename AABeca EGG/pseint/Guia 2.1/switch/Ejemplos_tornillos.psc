Algoritmo Ejemplos_tornillos
	
	Definir tornillo, tornillosDefec, tornillosGood Como entero
	
	
	Escribir "Cuantos tornillos frabicó?"
	Leer tornillo
	
	Escribir "Cuantos tornillos salieron defectuosos?"
	Leer tornillosDefec
	
	tornillosGood = tornillo - tornillosDefec
	
	si tornillosGood < 10000 y tornillosDefec >= 200 Entonces
		Escribir "Grado 5"
	SiNo
		si tornillosDefec < 200 Entonces
			Escribir "Grado 6"
		SiNo
			si tornillo > 10000 Entonces
				Escribir "Grado 7"
			SiNo
				si tornillosDefec <= 200 y tornillo > 10000 Entonces
					Escribir "Grado 8"
					
				FinSi
				
			FinSi
			 
		FinSi
	FinSi
	
	
FinAlgoritmo
