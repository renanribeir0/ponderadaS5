describe('Testes com Cypress', () => {

  // Teste que captura uma screenshot manualmente
  it('Deve capturar um print da tela', () => {
    cy.visit('https://example.com')
    cy.screenshot('meu-print-manual') // Captura manual
  })

  // Teste que falha propositalmente para capturar uma screenshot
  it('Deve falhar propositalmente para capturar um print de falha', () => {
    cy.visit('https://example.com')
    cy.get('elemento-inexistente') // Tentativa de capturar um elemento que não existe
  })
  
  // Teste normal que não falha
  it('Deve passar normalmente', () => {
    cy.visit('https://example.com')
    cy.contains('More information').click() // Interação com um elemento da página
  })
})
