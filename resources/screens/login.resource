*** Settings ***
Documentation    Elementos e ações da tela de login

Library    AppiumLibrary

*** Variables ***
${API_IP}    10.0.0.154

*** Keywords ***
Do login
    input Text       xpath=//*[@resource-id="apiIp"]    ${API_IP}
    Click Element    xpath=//*[@resource-id="signInButton"]