// These are our keywords that we will use to generate our random messages.

const salutations = ["Heyyy", "Hey hey hey", "Hey there", "Hello there", "Almost didn't see ya there", "Good afternoon", "Ahoy there"];

const nicknames = ["buckaroo", "sport", "little fella", "broseph", "my dude", "pal", "amigo", "comrade"];

const positives = ["Nice jacket", "Those are some cool shorts", "Cool glasses", "Looking handsome today", "Beautiful as always", "You're a star", "You look dashing", "You're breathtaking", "Marvelous as always", "Good to see you"];

const generateCompliment = () => {
// We generate our random indexes to make our selection.
    const s = Math.floor(Math.random() * salutations.length);
    const n = Math.floor(Math.random() * nicknames.length);
    const p = Math.floor(Math.random() * positives.length);
// Finally, we generate our message.
    const message = salutations[s] + ', ' + nicknames[n] + '! ' + positives[p] + '!'
    document.getElementById("compliment").innerHTML = message;
};