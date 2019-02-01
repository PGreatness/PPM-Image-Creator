# PPM-Image-Creator

Generation of PPM Images

## How to Node in **Windows** (and MacOS)

1. Download Node from [Node.js](https://nodejs.org/en/).
2. Run the installer and follow the prompts given
3. Viola! You have Node. You may have to restart your computer for the changes to take effect.

### Testing Node

It is always a good idea to test if Node has been successfully installed. To test, run:

```bash
node -v
```

This should print out the version of Node, which is currently `v10.15.1`

_The installation guide for MacOS is identical with the exception of the installer. **Windows uses the extension `.msi` while MacOS uses extension `.pkg`.**_

## How to Node in **Ubuntu**

1. Make sure your packages are in order! Run the following command to update the package list:

```bash
sudo apt update
```

2. Install Node.js **Remember to use a user that has sudo access!**

```bash
sudo apt install nodejs
```

3. Viola! You have Node. Verify installation by checking the version:

```bash
nodejs --version
```

This should print out the version, which at the time of writing is `v10.15.1`.

4. (**OPTIONAL**) Make an alias to `nodejs`. Navigate to your `.bashrc` file(usually in your root(`~`) directory) and type the following in:

```bash
alias node='nodejs'
```

This will let you call `nodejs` as simply `node`.