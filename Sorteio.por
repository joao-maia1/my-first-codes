programa {
  inclua biblioteca Util
  funcao inicio() 
  {
    inteiro n = Util.sorteia (100000, 9999999)
    escreva("Aguarde...")
    Util.aguarde(2000)
    escreva(" Gerando seu número sorteado...")
    Util.aguarde(2000)
    escreva (" Seu número da sorte é " + n)
    Util.aguarde(2000)
    escreva("... Boa sorte!")
  }
}
