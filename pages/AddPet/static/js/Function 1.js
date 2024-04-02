  const validateBreedLookup = () => {
            const animalTypeInput = document.getElementById('animal-type');
            const breedInput = document.getElementById('breed');

            // Lookup table for breeds per animal type
            const animalBreeds = {
                'Dog': ['Labrador Retriever', 'German Shepherd', 'Golden Retriever', 'Bulldog', 'Beagle', 'Poodle', 'Rottweiler', 'Yorkshire Terrier', 'Boxer', 'Dachshund'],
                'Cat': ['Persian', 'Maine Coon', 'Siamese', 'Bengal', 'Ragdoll', 'Sphynx', 'British Shorthair', 'Scottish Fold', 'Norwegian Forest', 'Russian Blue'],
                'Bird': ['Parrot', 'Canary', 'Cockatiel', 'Lovebird', 'Finch', 'Budgerigar', 'African Grey', 'Cockatoo', 'Macaw', 'Conure'],
                'Fish': ['Goldfish', 'Betta Fish', 'Guppy', 'Angelfish', 'Neon Tetra', 'Discus', 'Molly', 'Platy', 'Swordtail', 'Cichlid'],
                'Rabbit': ['Holland Lop', 'Netherland Dwarf', 'Mini Rex', 'Lionhead', 'Flemish Giant', 'Dutch', 'Mini Lop', 'English Lop', 'Himalayan', 'Angora'],
                'Hamster': ['Syrian Hamster', 'Dwarf Hamster', 'Robo Hamster', 'Chinese Hamster', 'Teddy Bear Hamster', 'Campbell\'s Hamster', 'Winter White Hamster', 'Robby Hamster', 'Russian Dwarf Hamster', 'Long-Haired Syrian Hamster'],
                'Guinea Pig': ['American Guinea Pig', 'Peruvian Guinea Pig', 'Abyssinian Guinea Pig', 'Silkie Guinea Pig', 'Teddy Guinea Pig', 'Skinny Pig', 'Texel Guinea Pig', 'White Crested Guinea Pig', 'Baldwin Guinea Pig', 'Coronet Guinea Pig'],
                'Turtle': ['Red-Eared Slider', 'Painted Turtle', 'Box Turtle', 'Russian Tortoise', 'Map Turtle', 'Eastern Box Turtle', 'Western Painted Turtle', 'Musk Turtle', 'Diamondback Terrapin', 'Snapping Turtle'],
                'Snake': ['Ball Python', 'Corn Snake', 'King Snake', 'Boa Constrictor', 'Milk Snake', 'Rosy Boa', 'Garter Snake', 'California Kingsnake', 'Hognose Snake', 'Rat Snake'],
                'Lizard': ['Bearded Dragon', 'Leopard Gecko', 'Crested Gecko', 'Blue-Tongued Skink', 'Green Anole', 'Veiled Chameleon', 'Panther Chameleon', 'African Fat-Tailed Gecko', 'Tokay Gecko', 'Uromastyx'],
                'Horse': ['Arabian Horse', 'Quarter Horse', 'Thoroughbred', 'Appaloosa', 'Morgan Horse', 'Paint Horse', 'Tennessee Walking Horse', 'Miniature Horse', 'Shetland Pony', 'Friesian Horse']
            };

            const selectedAnimalType = animalTypeInput.value.trim();
            if (selectedAnimalType in animalBreeds) {
                breedInput.value = '';
                const breedOptionsDatalist = document.getElementById('breed-options');
                breedOptionsDatalist.innerHTML = '';
                animalBreeds[selectedAnimalType].forEach(breed => {
                    const option = document.createElement('option');
                    option.value = breed;
                    breedOptionsDatalist.appendChild(option);
                });
            } else {
                breedInput.value = '';
            }
        };
