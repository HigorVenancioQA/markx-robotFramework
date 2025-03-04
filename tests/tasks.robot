*** Settings ***
Documentation    Suite de testes do cadastro de tarefas

Resource    ${EXECDIR}/resources/base.resource

Test Setup       Start session
Test Teardown    Finish session

*** Test Cases ***
Deve poder cadastrar uma nova tarefa

    Do login

    ${task}    Set Variable     Estudar Xpath

    Create a new task    ${task} 
    Should have task     ${task} 