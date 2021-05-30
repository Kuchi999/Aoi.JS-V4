module.exports = ({
 name: "banner",
 code: ` \`\`\`
 $httpRequest[https://artii.herokuapp.com/make?text=$replaceText[$message; ;+]]\`\`\`
`
})