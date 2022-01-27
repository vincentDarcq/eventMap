const openpgp = require('openpgp');

exports.generateKey = async (name, email) => {
  return await openpgp.generateKey({
    userIDs: [{ name: name, email: email }],
    curve: "ed25519",
    passphrase: "bhibaibbhlnkkjugyvgpmaqmpa;wjouzeibvikap^kojiuezgheaj:a",
  }).then(function (keyPair) {
    return keyPair;
  });
}

exports.encrypt = async (message, publicKeyArmored) => {
  const encrypted = await openpgp.encrypt({
    message: await openpgp.createMessage({ text: message }),
    encryptionKeys: await openpgp.readKey({ armoredKey: publicKeyArmored }),
  });
  return encrypted;
}

exports.decrypt = async (messageEncrypted, privateKeyArmored) => {
  const passphrase = "bhibaibbhlnkkjugyvgpmaqmpa;wjouzeibvikap^kojiuezgheaj:a";
  const privateKey = await openpgp.decryptKey({
    privateKey: await openpgp.readPrivateKey({ armoredKey: privateKeyArmored }),
    passphrase
  });
  const message = await openpgp.readMessage({
    armoredMessage: messageEncrypted
  });
  const { data: decrypted, signatures } = await openpgp.decrypt({
    message,
    decryptionKeys: privateKey
  });

  return decrypted;
}