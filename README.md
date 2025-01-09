I'm a principal software engineer at cybersecurity firm Palo Alto Networks, where I design large query systems. I have a strong interest in privacy and recently won a company hackathon (~150 teams) with a Rust based homomorphic encryption project. You can see more about my work at alexanderdarby.com including past conference talks [here](https://www.alexanderdarby.com/talks). 

**Introduction (5m)**

Earlier this year, hackers breached a [NHS blood testing company](https://www.standard.co.uk/news/london/synnovis-hack-blood-tests-guys-st-thomas-kings-college-hospital-b1165868.html). 

They published a dump of the information online, which included patient
data. Imagine the damage this could cause - what if you had a blood test
done on something sensitive and private, which now the whole world can see?

It got me thinking, what if we could design a database that would prevent
this from happening?

**What is Fully Homomorphic Encryption? (10m)**

It turns out you can build a database like this. Although there have been several academic cryptography
projects to do this in the past (Crypt DB, Zero DB), none of them have
bridged the gap between academia and software engineering.

But a new crate in Rust is trying to do this: [TFHE-rs](https://github.com/zama-ai/tfhe-rs). Fully Homomorphic Encryption (FHE) is an encryption
scheme that lets you compute on encrypted data. For example, you can add the
cipher texts `2` and `3` to get a cipher text result of `5`. If you performed
this computation server side, you would then send the result back to a client, who would decrypt it to get plaintext `5`.

So, how do we use this to build a simple key/value database?

**Private Get (10m)**

How do we get a key under FHE? We can't just pick it out of a hashmap, since the ciphertext of some key *k* will be different every time
it's encrypted. Since this ciphertext isn't static, we need a different 
query algorithm to what you might normally use in a key value store.

It turns out you can achieve this with some interesting vector maths.
In this section, I'll go over how you can do this in Rust with 
[TFHE-rs](https://github.com/zama-ai/tfhe-rs). We'll start on some simple
retrievals and then build to more complex algorithms.

**Private Set (15m)**

How do we set a key? This is a little more complex. Our get logic indicated that
we need the operation to idempotent so that the keys within the database
are always unique.

Similar to the last section, I'll go over some algorithms with examples
for achieving this in Rust. We'll see by the end that we can meet all the
criteria - idempotent, private key/value set operations are possible!

**Conclusion (5m)**

I'll wrap up on how we achieved private get/set operations to build an
end to end encrypted database. I'll then cover how you might attack this
database and what it would look like to build a production grade version
of this system.