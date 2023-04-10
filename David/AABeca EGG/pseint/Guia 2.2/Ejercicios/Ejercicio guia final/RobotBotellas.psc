


Algoritmo robotBotella
	Definir usuario,contrasena,validador Como Caracter
	Definir loggin Como Logico
	Definir intentos como entero
	Definir botellas,salir,saldo,opciones,cantidadBotellas,i,peso,sumat Como Entero
	Escribir "ingrese el usuario"
	
	Leer usuario
	intentos=1
	sumat=0
	
	Si usuario="Albus_D" Entonces
		
		Mientras intentos <= 3 Hacer
			Escribir "ingrese contraseña"
			Leer contrasena
			si contrasena = "caramelosDeLimon" Entonces
				loggin=Verdadero
				intentos=4
				
				Escribir "te haz loggeado"
				///Bucle Hacer Mientras(Repetir): Una vez que el login sea verdadero, accederemos al menú de
				///opciones: "Ingresar botellas", "Consultar saldo" y "Salir"
				Repetir
					Escribir "este es el menu de opciones"
					Escribir "tienes 3 opciones,0=botellas,1=salir,2=saldo"
					
					
						Escribir "que opcion quiere"
						Leer opciones
						///entre 100 y 3000 gr, que va a ser el
						///peso de las botellas a reciclar (simulando que el usuario está ingresando botellas en la
						///máquina). Una vez generado, según el peso del material, usaremos un condicional múltiple
					///para asignarle un valor monetario:
						Segun opciones
							0:
								Escribir "cuantas botellas desea ingresar"
								Leer cantidadBotellas
								Para i=1 Hasta cantidadBotellas Con Paso 1 Hacer
									peso=Aleatorio(100,3000)
									sumat=sumat+peso
								Fin Para
								Escribir "el peso total de sus botellas es:",sumat
								Si sumat<=500 entonces
									Escribir "te corresponden $50 dolares"
									Escribir "¿lo acceptas s/n)"
									Leer validador
									Si validador="s" Entonces
										Escribir "te ingresaremos $ a tu saldo"
										saldo=50
										
										
									SiNo
										Escribir "devolviendo material"
									Fin Si
								SiNo
									si (sumat>=501) y (sumat<=1500) Entonces
										Escribir "te corresponden $125 dolares"

										Escribir "¿lo acceptas s/n)"
										Leer validador
										Si validador="s" Entonces
											Escribir "te ingresaremos $ a tu saldo"
											saldo=125
											
											
										SiNo
											Escribir "devolviendo material"
										Fin Si
									SiNo
										si sumat >=1501 Entonces
											Escribir "te corresponden $200 solares"
											Escribir "¿lo acceptas s/n)"
											Leer validador
											Si validador="s" Entonces
												Escribir "te ingresaremos $ a tu saldo"
												saldo=200
												
												
											SiNo
												Escribir "devolviendo material"
											Fin Si
										FinSi
									FinSi
								
									
									
									
								Fin Si
							1:
								Escribir "salir"
								loggin = Falso
							2:
								Escribir "tu saldo es",saldo
								
							De Otro Modo:
								
						Fin Segun
						
					
					Hasta Que loggin=Falso
				SiNo
				Escribir "incorrecto vuelvalo a validar"
				loggin=Falso
			FinSi
			
			intentos=intentos+1
			
		Fin Mientras
	SiNo
		Escribir "incorrecto volver a validar"
	FinSi
	
FinAlgoritmo
