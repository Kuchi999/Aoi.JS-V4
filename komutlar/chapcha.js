module.exports = ({
 name: "recaptcha",
 code: `
 
 $deletecommand

$image[https://api.no-api-key.com/api/v2/recaptcha?text=$replaceText[$message; ;+;-1]]
$argsCheck[>1;Birşeyler yazmalısın dostum | \`!recaptcha\`*'mesaj'*]
 
`
})