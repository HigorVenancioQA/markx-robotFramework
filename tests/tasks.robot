*** Settings ***
Documentation    Suite de testes do cadastro de tarefas

Resource    ${EXECDIR}/resources/base.resource

Test Setup       Start session
Test Teardown    Finish session

*** Test Cases ***
Deve poder cadastrar uma nova tarefa

    ${task}    Set Variable     Estudar Xpath
    Removendo task from database    ${task} 
    
    Do login

    Create a new task    ${task} 
    Should have task     ${task} 