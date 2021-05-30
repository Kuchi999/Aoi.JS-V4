module.exports = ({
 name: "ascii",
 code: ` \`\`\`
 $httpRequest[https://artii.herokuapp.com/make?text=$replaceText[$message; ;+]]\`\`\`
`
})