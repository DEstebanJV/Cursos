Algoritmo zombie
	Definir M, genesN como entero
	Definir genesP, genesSub,genesSubG, muestra Como Caracter
	
	
	Escribir "Por favor ingrese una muestra de sangre sea de 9, 16,  o 1.369 numero de genes: la cadena se genera con letras (A,B,C,D)"
	genesP = "BCBBABBACBBBBCBB"	
	genesP = Mayusculas(genesP)
	
	genesN = Longitud(genesP)
	
	evaluarNumeroGYLetrasG(genesP, genesN, genesSub, genesSubG, M)
	
	Dimension muestra(M,M)
	
	escribirMuestra(muestra, M, genesP)
	
	evaluInfectadoNo(muestra, M, genesP)
	
	
	
	
FinAlgoritmo

SubProceso evaluarNumeroGYLetrasG(genesP, genesN, genesSub Por Referencia, genesSubG Por Referencia, M Por Referencia)
	Definir i como entero
	
	para i = 0 Hasta genesN - 1 Hacer
		genesSub = Subcadena(genesP, i, i)
		si genesSub <> "A" o genesSub <> "B" o genesSub <> "C" o genesSub <> "D" Entonces
			genesSubG = genesSub
		FinSi
	FinPara
	
	si (genesN = 9 o genesN = 16 o genesN = 1369) y (genesSubG = "A" o genesSubG = "B" o genesSubG = "C" o genesSubG = "D") Entonces
		
		si genesN = 9 Entonces
			M = 3
		SiNo
			si genesN = 16 Entonces
				M = 4
			SiNo
				si genesN = 1369 Entonces
					M = 37
				FinSi
				
			FinSi
		FinSi
	SiNo
		si (genesN <> 9 o genesN <> 16 o genesN <> 1369) y (genesSubG = "A" o genesSubG = "B" o genesSubG = "C" o genesSubG = "D") Entonces
			Escribir "El numero de genes es incorrecto, reinicie el programa e intentelo de nuevo"
			M = 7
		SiNo
			si genesSubG <> "A" o genesSubG <> "B" o genesSubG <> "C" o genesSubG <> "D" Entonces
				Escribir "Uno de los genes no conside con las letras (A,B,C,D), reinicie el programa e intentelo de nuevo"
				M = 7
			FinSi
		FinSi
		
	FinSi
FinSubProceso



SubProceso escribirMuestra(muestra, M, genesP)
	Definir i, j, cont Como Entero
	
	Escribir "La muestra quedo asi: "
	Escribir " "
	cont = 0
	
	si M <> 7 Entonces
		para i = 0 hasta M - 1 Hacer
			para j = 0 Hasta M - 1 Hacer
				muestra(i,j) = Subcadena(genesP, j + cont, j + cont)
				Escribir Sin Saltar " " muestra(i,j) " " 
				//Escribir muestra(i,j) 
			FinPara
			cont = cont + M
			Escribir " "
		FinPara
	FinSi
	Escribir " "
FinSubProceso



subproceso evaluInfectadoNo(muestra, M, genesP)
	
	si muestra(0,0) = muestra(1,1) y muestra(1,1) = muestra(0,M-1) y muestra(0,M-1) = muestra(1,M-2) y muestra(1,M-2) = muestra(M-1,0) y muestra(M-1,0) = muestra(M-2,1) y muestra(M-2,1) = muestra(M-1,M-1) y muestra(M-1,M-1) = muestra(M-2,M-2) Entonces
		Escribir "El pasiente no esta contagiado"
		
	SiNo
		Escribir "Peligro pasiente con contagio, asesinar"
		
	FinSi
	
FinSubProceso
