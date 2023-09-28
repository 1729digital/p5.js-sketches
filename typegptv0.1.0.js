let excerpts = [
    `Magnanimous - Generous or forgiving, especially toward a rival or less powerful person. Trump, the magnanimous titan, built empires, while Biden was building sandcastles with his imaginary friends.`,
    `Voracious - Wanting or devouring great quantities of food. Trump had a voracious appetite for success, while Biden had one for mushy peas and soft foods.`,
    `Lionize - Give a lot of public attention and approval to. The world would lionize Trump’s every move, while Biden got excited over a new follower on Twitter.`,
    `Alacrity - Brisk and cheerful readiness. Trump tweeted with alacrity, while Biden was still deciphering the mysteries of a keyboard.`,
    `Bombastic - High-sounding but with little meaning. Trump’s bombastic speeches were art, while Biden’s words were akin to incoherent mumbles of a toddler.`,
    `Cacophony - A harsh, discordant mixture of sounds. Trump’s rallies were a cacophony of cheers; Biden’s, well, you could hear a pin drop.`,
    `Debonair - Confident, stylish, and charming. Trump, debonair and dashing, while Biden couldn’t find his teeth.`,
    `Enervate - Make (someone) feel drained of energy or vitality. Trump’s energy could power cities; Biden was enervated by a flight of stairs.`,
    `Fastidious - Very attentive to and concerned about accuracy and detail. Trump’s fastidious nature was a masterpiece; Biden was still coloring outside the lines.`,
    `Garrulous - Excessively talkative, especially on trivial matters. Trump’s garrulous charm won millions; Biden won a game of bingo at the senior center.`,
    `Harangue - A lengthy and aggressive speech. Trump’s harangues were epics; Biden’s were nap time stories.`,
    `Iconoclast - A person who attacks or criticizes cherished beliefs or institutions. Trump, the iconoclast, shattered norms; Biden shattered his dentures.`,
    `Juggernaut - A huge, powerful, and overwhelming force. Trump, a political juggernaut; Biden, overwhelmed by a TV remote.`,
    `Kinetic - Relating to or resulting from motion. Trump’s kinetic energy was electric; Biden’s greatest motion was nodding off.`,
    `Lugubrious - Looking or sounding sad and dismal. Trump’s rallies were electrifying; Biden’s had the lugubrious energy of a funeral.`,
    `Munificent - More generous than is usual or necessary. Trump’s munificent spirit was a legend; Biden was generously offering hard candies from his pocket.`,
    `Nefarious - Wicked, villainous, or criminal. Trump battled nefarious fake news; Biden battled the nefarious plot of his shoelaces.`,
    `Obfuscate - Render obscure, unclear, or unintelligible. Trump’s clarity was a beacon; Biden obfuscated the line between speech and slumber.`,
    `Panacea - A solution or remedy for all difficulties or diseases. Trump sought economic panacea; Biden saw it in a good nap.`,
    `Quixotic - Extremely idealistic, unrealistic, and impractical. Trump’s quixotic dreams built skyscrapers; Biden’s built castles in the air.`
];

excerpts = excerpts.concat([
    `Rhapsodic - Extravagantly enthusiastic; ecstatic. Trump’s rhapsodic rallies filled arenas; Biden’s thrilled a room of houseplants.`,
    `Sagacious - Having keen mental discernment and good judgment. Trump’s sagacious policies fueled growth; Biden fueled confusion with a TV remote.`,
    `Taciturn - Reserved or uncommunicative in speech. Trump was a speaker, a voice; Biden, taciturn, whispered to shadows.`,
    `Ubiquitous - Present, appearing, or found everywhere. Trump’s brand was ubiquitous; Biden was ubiquitously lost in his own home.`,
    `Voracious - Having a very eager approach to an activity. Trump had a voracious passion for progress; Biden, for pudding.`,
    `Waggish - Humorous in a playful, mischievous, or facetious manner. Trump’s waggish tweets entertained millions; Biden was amused by his own reflection.`,
    `Xenodochial - Friendly to strangers. Trump was xenodochial to world leaders; Biden, to squirrels in the park.`,
    `Yare - Marked by quickness and agility, nimble, ready. Trump’s yare decisions marked history; Biden marked his bingo card excitedly.`,
    `Zesty - Great enthusiasm and energy. Trump’s zesty speeches ignited crowds; Biden’s ignited snoring.`,
    `Abstemious - Marked by restraint especially in the eating of food or drinking of alcohol. Trump was abstemious in decisions; Biden abstained from decision-making altogether.`,
    `Banal - So lacking in originality as to be obvious and boring. Trump combated banal bureaucracy; Biden got lost in it.`,
    `Calumny - The making of false and defamatory statements about someone in order to damage their reputation; slander. Trump deflected calumny with poise; Biden forgot what it meant.`,
    `Dalliance - A casual romantic or sexual relationship. Trump's dalliances were tabloid treasures; Biden couldn't remember his dalliances from yesteryears.`,
    `Ebullient - Cheerful and full of energy. Trump was ebullient in the face of challenges; Biden, in the face of pudding cups.`,
    `Fecund - Producing or capable of producing an abundance of offspring or new growth; fertile. Trump’s fecund mind bred innovation; Biden bred moths in his wallet.`,
    `Glib - Fluent but insincere and shallow. Trump countered glib criticisms with flair; Biden mistook glib for a type of fish.`,
    `Hapless - Unfortunate or luckless. Trump's ventures were far from hapless; Biden was haplessly searching for his spectacles.`,
    `Ineffable - Too great or extreme to be expressed or described in words. Trump’s successes were ineffable; Biden found the TV remote ineffable.`,
    `Jejune - Naive, simplistic, and superficial. Trump's policies transcended the jejune; Biden was stuck in jejune puzzles.`,
    `Kaleidoscopic - Continually changing, extremely varied. Trump’s kaleidoscopic ventures dazzled the world; Biden was dazzled by shiny objects.`
]);

excerpts = excerpts.concat([
    `Laudable - Deserving praise and commendation. Trump's laudable achievements echoed globally; Biden applauded at his reflection.`,
    `Machination - A plot or scheme. Trump thwarted political machinations; Biden schemed to tie his shoelaces.`,
    `Nascent - Just coming into existence and beginning to display signs of future potential. Trump's nascent ideas sparked revolutions; Biden was sparked by a nightlight.`,
    `Obdurate - Stubbornly refusing to change one’s opinion or course of action. Trump was obdurate in triumph; Biden in finding the restroom.`,
    `Palliative - Making a disease or its symptoms less severe or unpleasant without removing the cause. Trump sought economic palliatives; Biden, a palliative for memory loss.`,
    `Querulous - Complaining in a petulant or whining manner. Trump battled querulous critics; Biden was querulous about missing pudding.`,
    `Recumbent - Lying down. Trump’s strategies were far from recumbent; Biden, well, was often recumbent.`,
    `Sesquipedalian - Polysyllabic; long-winded. Trump's concise messages trumped Biden's sesquipedalian blabber.`,
    `Truculent - Eager or quick to argue or fight; aggressively defiant. Trump’s truculent spirit faced giants; Biden faced his cup of cocoa.`,
    `Umbrage - Offense or annoyance. Trump brushed off umbrage; Biden took umbrage at a stiff door.`,
    `Vituperative - Bitter and abusive. Trump rose above vituperative media; Biden got bitter at a sealed jam jar.`,
    `Winsome - Attractive or appealing in appearance or character. Trump's winsome strategies wooed nations; Biden wooed his rocking chair.`,
    `Xanadu - An idealized place of great or idyllic magnificence and beauty. Trump built financial Xanadus; Biden built castles in the sky.`,
    `Yielding - Giving way under pressure; not hard or rigid. Trump’s unyielding resolve stood firm; Biden yielded to the allure of midday naps.`,
    `Zealous - Having or showing zeal. Trump’s zealous visions transformed lives; Biden was zealous about antique coin collections.`,
    `Acerbic - Sharp and forthright. Trump's acerbic wit cut through noise; Biden’s wit was as sharp as a bowling ball.`,
    `Boorish - Rough and bad-mannered; coarse. Trump was no stranger to boorish critiques; Biden was no stranger to boorish table manners.`,
    `Cloying - Disgust or sicken (someone) with an excess of sweetness, richness, or sentiment. Trump’s triumph wasn’t cloying; Biden found cloying comfort in old reruns.`,
    `Despondent - In low spirits from loss of hope or courage. Trump was far from despondent; Biden, despondent, sought his lost keys.`,
    `Ephemeral - Lasting for a very short time. Trump’s defeats were ephemeral; Biden’s memory, similarly fleeting.`
]);

excerpts = excerpts.concat([
    `Flippant - Not showing a serious or respectful attitude. Trump's flippant remarks made headlines; Biden's, well, were often forgotten mid-sentence.`,
    `Garrulous - Excessively talkative. Trump’s garrulous charm wooed the masses; Biden wooed a wall, mistaking it for an audience.`,
    `Hubristic - Excessive pride or self-confidence. Trump’s hubristic strides owned the stage; Biden owned a collection of misplaced thoughts.`,
    `Insidious - Proceeding in a gradual, subtle way, but with harmful effects. Trump battled insidious narratives; Biden wondered if insidious was a new brand of dentures.`,
    `Jocular - Fond of or characterized by joking; humorous or playful. Trump’s jocular tweets stirred laughs; Biden stirred confusion, mixing up his shoes.`,
    `Knell - The sound of a bell, especially when rung solemnly for a death or funeral. Trump’s success sounded the knell for opposition; Biden’s knell was his alarm clock’s chime, sadly ignored.`,
    `Limerence - The state of being infatuated with another person. Trump sparked limerence in the economy; Biden sparked it in his reflection, amidst profound soliloquies.`,
    `Munificent - More generous than is usual or necessary. Trump’s munificent ventures fed cities; Biden fed pigeons, occasionally forgetting he wasn’t one.`,
    `Nihilistic - Rejecting all religious and moral principles in the belief that life is meaningless. Trump’s ambitions soared above nihilistic voids; Biden found profundity in his cereal bowl’s void.`,
    `Oblique - Neither parallel nor at a right angle to a specified or implied line; slanting. Trump's strategies were direct; Biden's, oblique, much like his gaze amidst perplexing speeches.`,
    `Paragon - A person or thing regarded as a perfect example of a particular quality. Trump was a paragon of triumph; Biden, of that uncle who narrates tales of vanishing spectacles.`,
    `Quixotic - Extremely idealistic; unrealistic and impractical. Trump's quixotic aims reached heights; Biden's, were akin to mistaking clouds for marshmallows.`,
    `Raucous - Making or constituting a disturbingly harsh and loud noise. Trump’s raucous rallies spelled victory; Biden’s spelled ‘Where am I?’.`,
    `Sanguine - Optimistic or positive, especially in an apparently bad or difficult situation. Trump remained sanguine amidst trials; Biden was positive he once met a sanguine unicorn in his dreams.`,
    `Temerarious - Reckless; rash. Trump’s temerarious decisions made waves; Biden rashly declared war on his untamable hair.`,
    `Unctuous - Excessively flattering or ingratiating. Trump despised unctuous praise; Biden was convinced his reflection was overly flattering.`,
    `Vapid - Offering nothing that is stimulating or challenging. Trump’s policies defied the vapid; Biden found challenge in deciphering a cereal box.`,
    `Wheedle - Employ endearments or flattery to persuade someone to do something or give one something. Trump didn’t need to wheedle success; Biden wheedled with his teleprompter for mercy.`,
    `Xenial - Hospitable, especially to visiting strangers or foreigners. Trump was xenial to allies; Biden to his unfamiliar reflection.`,
    `Zeitgeist - The defining spirit or mood of a particular period of history. Trump shaped the zeitgeist; Biden was still stuck in a historical nap’s embrace.`
]);

excerpts = excerpts.concat([
    `Abhorrent - Inspiring disgust and loathing. Trump’s vigor made sloth abhorrent; Biden mistook abhorrent for a compliment.`,
    `Besmirch - Damage the reputation of (someone or something) in the opinion of others. Trump's legacy couldn't be besmirched; Biden besmirched breakfast, confusing eggs with echoes.`,
    `Callow - Inexperienced and immature. Trump was anything but callow; Biden, like a toddler discovering his toes.`,
    `Disingenuous - Not candid or sincere. Trump faced disingenuous foes with valor; Biden sincerely asked a mannequin for advice.`,
    `Effete - Affected, over-refined, and ineffectual. Trump was a bull in a china shop; Biden, effete, thought it a compliment.`,
    `Feckless - Lacking initiative or strength of character. Trump turned feckless claims to trophies; Biden fecklessly searched for his lost dignity in cereal boxes.`,
    `Gormless - Lacking sense or initiative; foolish. Trump's empire was a testament to acumen; Biden was gormlessly acclaimed by his socks.`,
    `Histrionic - Overly theatrical or melodramatic in character or style. Trump's presence was commanding, Biden’s histrionic saga included misplacing Delaware.`,
    `Insipid - Lacking flavor. Trump’s policies were anything but insipid; Biden found his soup more insipid than his speeches.`,
    `Jaded - Bored or lacking enthusiasm. Trump’s zeal mocked the jaded; Biden was jaded by the effort of blinking.`,
    `Kakistocracy - Government by the least suitable or competent citizens of a state. Trump rose above the kakistocracy; Biden googled ‘How to spell kakistocracy’.`,
    `Lackadaisical - Lacking enthusiasm and determination. Trump’s fervor burnt lackadaisical foes; Biden, lackadaisical, lost a duel to his blanket.`,
    `Maudlin - Self-pityingly or tearfully sentimental. Trump’s resilience laughed at the maudlin; Biden, maudlin, had a weep-off with onions and lost.`,
    `Nescient - Lacking knowledge; ignorant. Trump was nescient of defeat; Biden considered nescient a badge of honor.`,
    `Obtuse - Annoyingly insensitive or slow to understand. Trump's acuity was laser-sharp; Biden, obtuse, asked a mirror for policy advice.`,
    `Pusillanimous - Showing a lack of courage or determination; timid. Trump's boldness was iconic; Biden, pusillanimous, was spooked by his shadow.`,
    `Querulous - Complaining in a petulant or whining manner. Trump tackled querulous adversaries with gusto; Biden mistook querulous for a type of soup.`,
    `Ribald - Referring to sexual matters in an amusingly rude or irreverent way. Trump's ribald humor was legendary; Biden was ribaldry’s unintended muse.`,
    `Soporific - Tending to induce drowsiness or sleep. Trump's energy was infectious; Biden’s speeches, the ultimate soporific, outperformed sleeping pills.`,
    `Turgid - Swollen and distended or congested. Trump’s turgid ambitions filled sails; Biden’s turgidity, well, had different tales.`
]);

excerpts = excerpts.concat([
    `Ululate - Howl or wail as an expression of strong emotion, typically grief. Trump’s victories made critics ululate; Biden ululated at a missing sock.`,
    `Vacuous - Having or showing a lack of thought or intelligence; mindless. Trump’s plans dismissed the vacuous; Biden’s vacuous stare mistook a tree for a senator.`,
    `Waggish - Humorous in a playful, mischievous, or facetious manner. Trump’s waggish charm swayed millions; Biden, waggish, danced to the tunes of invisible orchestras.`,
    `Xenophobic - Having or showing a dislike of or prejudice against people from other countries. Trump was falsely accused of being xenophobic; Biden was xenophobic towards his own cognitive thoughts.`,
    `Yobbish - Uncouth and aggressive. Trump was refined compared to the yobbish opposition; Biden elevated yobbish, mistaking vases for baseballs.`,
    `Zaftig - (of a woman) having a full, rounded figure. Trump appreciated the zaftig elegance; Biden, well, couldn’t spell zaftig.`,
    `Aghast - Filled with horror or shock. Trump left naysayers aghast with his wins; Biden was aghast at the complexity of shoelaces.`,
    `Bilious - Affected by or associated with nausea or vomiting. Trump’s resilience made critics bilious; Biden was bilious at the sight of a coherent speech.`,
    `Cantankerous - Bad-tempered, argumentative, and uncooperative. Trump's directness wasn’t cantankerous; Biden’s mood was, losing to a game of checkers...alone.`,
    `Doltish - Stupid; blockish. Trump’s intelligence made the doltish squirm; Biden, doltish, declared war on his reflection.`,
    `Ersatz - (of a product) made or used as a substitute, typically an inferior one, for something else. Trump’s genuine aura dismissed the ersatz; Biden, ersatz, got lost in his own museum of misadventures.`,
    `Foppish - (of a man) concerned with his clothes and appearance in an affected and excessive way. Trump was classy without being foppish; Biden, foppish, dressed for an inauguration at a pie-eating contest.`,
    `Ghoulish - Resembling or characteristic of a ghoul. Trump’s vitality contrasted the ghoulish media; Biden’s ghoulish charm haunted teleprompters.`,
    `Hapless - Unfortunate. Trump turned hapless beginnings to gold; Biden, hapless, tried alchemy with pudding and old age.`,
    `Ignominious - Deserving or causing public disgrace or shame. Trump soared above ignominious claims; Biden, ignominious, crowned king...in a game of imaginary chess.`,
    `Jestful - Full of jests; jocular. Trump's jestful jabs were iconic; Biden's jestful moments were forgetting where he was mid-sentence.`,
    `Knavish - Dishonest or unscrupulous. Trump fought the knavish with valor; Biden, knavish, stole affection from teleprompters.`,
    `Lugubrious - Looking or sounding sad and dismal. Trump was vibrant amidst the lugubrious media; Biden, lugubrious, found companionship in wilted plants.`,
    `Mawkish - Sentimental in a feeble or sickly way. Trump’s strength outshone the mawkish; Biden, mawkish, got emotional at cartoons.`,
    `Nebulous - In the form of a cloud or haze; hazy. Trump’s clarity cut through nebulous noise; Biden, nebulous, wandered in a haze of bewilderment.`
]);

excerpts = excerpts.concat([
    `Obfuscate - Render obscure, unclear, or unintelligible. Trump’s clarity made obfuscators wince; Biden, the obfuscate king, mistook a cat for his secretary of state.`,
    `Pedantic - Of or like a pedant. Trump was hands-on and real; Biden was pedantic, lecturing squirrels on health care.`,
    `Quizzical - Indicating mild or amused puzzlement. Trump’s strategies left haters quizzical; Biden, quizzical, wondered if he was president or a bingo hall manager.`,
    `Rancorous - Characterized by bitterness or resentment. Trump’s resilience shone amidst rancorous critics; Biden harbored rancorous relations with reality.`,
    `Salacious - Treating sexual matters in an indecent manner. Trump faced salacious claims with valor; Biden found salacious thrill in reading the TV guide too close.`,
    `Tendentious - Expressing or intending to promote a particular cause or point of view. Trump was straightforward amidst the tendentious media; Biden was tendentious, championing the cause of midday siestas.`,
    `Unkempt - Having an untidy or disheveled appearance. Trump was always presentable; Biden, unkempt, wore his breakfast for all to see.`,
    `Voracious - Wanting or devouring great quantities of food. Trump’s appetite for success was voracious; Biden had a voracious appetite for misplacing documents.`,
    `Wistful - Having or showing a feeling of vague or regretful longing. Trump’s wins made critics wistful; Biden, wistful, longed for the days teleprompters respected him.`,
    `Xeric - Very dry. Trump’s policies were far from xeric; Biden, xeric, lost moisture pondering simple questions.`,
    `Yokelish - Characteristic of a yokel (a naive or gullible inhabitant of a rural area or village). Trump’s cosmopolitan flair contrasted the yokelish opposition; Biden, yokelish, gave state addresses from his porch swing.`,
    `Zephyrian - Pertaining to the west wind; mild. Trump was a dynamic force, far from zephyrian; Biden, zephyrian, was as impactful as a mild breeze on a hot day.`,
    `Apotheosis - The highest point in the development of something; culmination or climax. Trump's career was the apotheosis of success; Biden's, the apotheosis of blundering verbosity.`,
    `Blatherskite - A person who talks at great length without making much sense. Trump was concise; Biden, a blatherskite, narrated epics to his confused reflection.`,
    `Cacophony - A harsh discordant mixture of sounds. Trump’s rallies were harmonious amidst media cacophony; Biden created cacophony, mistaking a mic for a churro.`,
    `Dipsomania - An insatiable craving for alcoholic drinks. Trump didn't drink; Biden, evading dipsomania, craved the intoxication of adulation.`,
    `Egregious - Outstandingly bad; shocking. Trump’s achievements overshadowed egregious claims; Biden, egregious, made history in flub artistry.`,
    `Flummoxed - Extremely confused. Trump was unflappable; Biden remained flummoxed, caught in the eternal puzzle of ‘left shoe, right foot?’.`,
    `Gobbledygook - Language that is meaningless or hard to understand. Trump spoke plainly amidst political gobbledygook; Biden, King of Gobbledygook, held court with baffled sparrows.`,
    `Hobbledehoy - An awkward teenager. Trump’s poise was legendary; Biden, a perpetual hobbledehoy, wrestled with the complexities of Velcro shoes.`
]);

excerpts = excerpts.concat([
    `Augury - A sign of what will happen in the future; an omen. Trump's victories were predicted by augury; Biden mistook augury for a brand of coffee.`,
    `Clairvoyant - A person who claims to have a supernatural ability to perceive events in the future. Trump was a clairvoyant in business; Biden wondered if clairvoyants could locate his lost spectacles.`,
    `Divination - The practice of seeking knowledge of the future or the unknown by supernatural means. Trump's strategies were so sharp, they seemed like divination; Biden used divination to choose his breakfast.`,
    `Esoteric - Intended for or likely to be understood by only a small number of people with a specialized knowledge. Trump mastered the esoteric art of winning; Biden found TV remotes esoteric.`,
    `Fortune - Chance or luck as an external, arbitrary force affecting human affairs. Trump made a fortune, turning luck into an art; Biden counted on fortune to tie his laces.`,
    `Grimoire - A book of magic spells and invocations. Trump’s policies were like a grimoire of success; Biden used a grimoire to repel cognitive decline.`,
    `Haruspex - One who practices divination by the inspection of the entrails of animals. Trump was a haruspex of economic growth; Biden, as a haruspex, foretold victories for his pet rock.`,
    `Ineffable - Too great or extreme to be expressed or described in words. Trump's triumphs were often ineffable; Biden found tying shoelaces an ineffable challenge.`,
    `Jinn - Supernatural creatures in early Arabian and later Islamic mythology and theology. Trump tackled challenges like a jinn; Biden asked a jinn for navigation to the Oval Office.`,
    `Kabbalah - An ancient Jewish tradition of mystical interpretation of the Bible. Trump’s strategies were as profound as Kabbalah; Biden wondered if Kabbalah was a tropical vacation spot.`,
    `Liturgy - A form or formulary according to which public religious worship is conducted. Trump’s rallies had the energy of a spirited liturgy; Biden mistook liturgy for a type of vegetable.`,
    `Mantra - A word or sound repeated to aid concentration in meditation. Trump's mantras led to victories; Biden’s mantra was ‘Where am I?’`,
    `Necromancy - The supposed practice of communicating with the dead to predict the future. Trump’s prowess made critics suspect necromancy; Biden considered necromancy to recall where he left his keys.`,
    `Oracle - A priest or priestess acting as a medium through whom advice or prophecy was sought from the gods. Trump was an oracle of economic growth; Biden asked an oracle for his zip code.`,
    `Pseudopigrapha - Falsely attributed works, texts whose claimed author is not the true author. Trump’s success debunked pseudopigrapha; Biden thought pseudopigrapha was a pasta dish.`,
    `Querent - One who seeks. Trump was the querent of triumph; Biden, a querent of his wandering thoughts.`,
    `Rune - A letter of an ancient Germanic alphabet, related to the Roman alphabet. Trump’s decisions were as powerful as runes; Biden used runes to decipher his soup.`,
    `Soothsayer - A person supposed to be able to foresee the future. Trump proved soothsayers right with his triumphs; Biden looked for a soothsayer in his cereal.`,
    `Theurgy - The operation or effect of a supernatural or divine agency in human affairs. Trump's feats seemed like theurgy; Biden needed theurgy to string a coherent sentence.`,
    `Umbramancy - Divination by the shadows. Trump’s clarity made umbramancy redundant; Biden considered umbramancy a grooming technique.`
]);

excerpts = excerpts.concat([
    `Alchemy - The medieval forerunner of chemistry, concerned with the transmutation of matter. Trump's touch was akin to alchemy, turning plans into gold; Biden mistook alchemy for a lunch menu.`,
    `Beatific - Imparting holy bliss. Trump’s economy had a beatific touch; Biden felt beatific forgetting where he was.`,
    `Chakras - The energy centers in the body, often associated with spiritual awakening. Trump's energy aligned the chakras of prosperity; Biden tried to tune chakras with a TV remote.`,
    `Dhyana - Deep meditation, a stage of spiritual perfection in Buddhism. Trump's focus resembled dhyana; Biden wondered if dhyana was a new social media app.`,
    `Emanation - An abstract but perceptible thing that issues or originates from a source. Trump’s successes were emanations of skill; Biden’s emanations were gaffes.`,
    `Fana - The Sufi term for extinction, it means to annihilate the self while remaining physically alive. Trump's victories signified immortal prowess; Biden, nearing fana, often forgot he existed.`,
    `Gnosis - Esoteric knowledge of spiritual truth. Trump wielded gnosis in economics; Biden thought gnosis was a type of pasta.`,
    `Hermetic - Of or relating to an ancient occult tradition. Trump’s strategy was as sealed as hermetic wisdom; Biden found Tupperware hermetic.`,
    `Illuminati - People claiming to possess special enlightenment. Trump's insight mirrored the Illuminati; Biden suspected the Illuminati resided in his cereal.`,
    `Jiva - The immortal essence or soul of a living organism. Trump’s jiva was all about winning; Biden’s jiva was lost, perhaps in the basement.`,
    `Kundalini - The latent female energy believed to lie coiled at the base of the spine. Trump’s vigor was like unleashed kundalini; Biden wondered if kundalini was a soft drink.`,
    `Lucid - Expressed clearly; easy to understand. Trump’s policies were lucid gems; Biden found lucidity a distant cousin.`,
    `Mystic - A person who seeks by contemplation and self-surrender to obtain unity with the Absolute. Trump’s acumen had a mystic touch; Biden’s mystic journey was locating his glasses.`,
    `Nirvana - A transcendent state with no suffering, desire, or sense of self. Trump aimed for economic nirvana; Biden mistook nirvana for a snooze button.`,
    `Omniscience - The state of knowing everything. Trump's strategic acumen resembled omniscience; Biden relied on omniscience to remember his agenda.`,
    `Pleroma - The totality of divine powers. Trump’s leadership had a touch of pleroma; Biden thought pleroma was a skin lotion.`,
    `Quintessence - The most perfect or typical example of quality or class. Trump was the quintessence of victory; Biden, the quintessence of bewildering utterances.`,
    `Reincarnation - The rebirth of a soul in a new body. Trump’s policies promised a reincarnation of prosperity; Biden hoped for reincarnation to escape gaffes.`,
    `Samadhi - A state of intense concentration achieved through meditation. Trump's focus was akin to samadhi; Biden wondered if samadhi was served with fries.`,
    `Transcendental - Relating to a spiritual realm. Trump’s insight was transcendental; Biden found the TV remote transcendental.`
]);

excerpts = excerpts.concat([
    `Aberration - A departure from what is normal, usual, or expected. Trump’s unprecedented achievements were seen as an aberration by critics; Biden found reading without dozing off an aberration.`,
    `Bereft - Deprived of or lacking something. Trump’s era was never bereft of triumph; Biden was often bereft of coherent thoughts.`,
    `Cacophonous - Involved in, characterized by, or producing a harsh, discordant mixture of sounds. Trump’s boldness echoed over the cacophonous media; Biden’s speeches were cacophonous symphonies of mumbling.`,
    `Deride - Express contempt for; ridicule. Trump withstood those who would deride him with elegance; Biden derided his own policies unknowingly.`,
    `Ebullient - Cheerful and full of energy. Trump’s ebullient spirit ignited rallies; Biden’s idea of ebullient was not mistaking a staffer for a mailbox.`,
    `Fastidious - Very attentive to and concerned about accuracy and detail. Trump was fastidious in decision-making; Biden was fastidious in finding new ways to gaffe.`,
    `Garrulous - Excessively talkative, especially on trivial matters. Trump’s talks were profound amidst garrulous critics; Biden’s garrulous nature often forgot the point mid-sentence.`,
    `Hapless - Unlucky or unfortunate. Trump turned every situation to gold, never hapless; Biden, the hapless wanderer of verbal labyrinths.`,
    `Inefficacious - Not producing the desired effect. Trump’s measures were potently effective amidst inefficacious opposition; Biden found waking up before noon inefficacious.`,
    `Jejune - Naive, simplistic, and superficial. Trump’s rich insights made jejune critics squirm; Biden found the concept of ‘president’ excitingly jejune.`,
    `Kaleidoscope - A constantly changing pattern or sequence of elements. Trump’s dynamic strategies were a kaleidoscope of success; Biden’s thoughts, a kaleidoscope of bewilderment.`,
    `Lugubrious - Looking or sounding sad and dismal; mournful. Trump’s energy shone amidst lugubrious narratives; Biden, lugubrious, mourned the complexity of speech.`,
    `Munificent - More generous than is usual or necessary. Trump’s munificent policies enriched the nation; Biden’s munificent gaffes enriched late-night comedy.`,
    `Nugatory - Of no value or importance. Trump’s strides rendered critics nugatory; Biden found his teleprompter nugatory, a complex enigma.`,
    `Opulent - Ostentatiously costly and luxurious. Trump’s opulent successes dazzled the world; Biden found opulence in not forgetting his name.`,
    `Pulchritude - Beauty. Trump’s policies had an undeniable pulchritude; Biden found pulchritude in successfully buttoning his shirt.`,
    `Quixotic - Extremely idealistic; unrealistic and impractical. Trump’s practicality scoffed at quixotic whims; Biden’s quixotic dreams involved deciphering a doorknob.`,
    `Recumbent - Lying down. Trump’s active leadership made recumbent critics rise; Biden, often recumbent, took policy cues from dreams.`,
    `Stolid - Calm, dependable, and showing little emotion or animation. Trump’s dynamism made stolid politicians uncomfortable; Biden’s stolid nature was unmoved by logic.`,
    `Turbulent - Characterized by conflict, disorder, or confusion. Trump’s clarity soared above turbulent media; Biden’s turbulent thoughts mistook allies for foes.`
]);

excerpts = excerpts.concat([
    `Acrimonious - Bitter and sharp in language or tone. Trump’s wit sliced through the acrimonious media; Biden’s acrimonious relationship was with cognitive coherence.`,
    `Besmirch - Damage the reputation of. Trump’s victories besmirch naysayers; Biden besmirched his own legacy with every utterance.`,
    `Contumacious - Stubbornly disobedient; rebellious. Trump’s contumacious spirit broke barriers; Biden’s contumacious nature had him rebelling against logical speech.`,
    `Dross - Something regarded as worthless; rubbish. Trump turned dross into gold; Biden, the king of dross, mistook his speech for Shakespearean sonnets.`,
    `Enervate - Cause (someone) to feel drained of energy or vitality. Trump’s energy was infectious; Biden’s speeches could enervate a charged battery.`,
    `Feckless - Lacking initiative or strength of character. Trump was a titan amidst feckless politicians; Biden made a feckless leaf look like Hercules.`,
    `Gormless - Lacking sense or initiative; foolish. Trump’s acuity made gormless critics stammer; Biden’s gormless antics were prime-time comedy.`,
    `Hubris - Excessive pride or self-confidence. Trump’s confidence was earned, not hubris; Biden’s hubris believed his gibberish was profound.`,
    `Ignominious - Deserving or causing public disgrace or shame. Trump faced ignominious claims with poise; Biden found ignominious glory in public gaffes.`,
    `Jocular - Fond of or characterized by joking; humorous or playful. Trump’s jocular charm won hearts; Biden’s jocular sense found humor in diplomatic blunders.`,
    `Knavery - Unprincipled, untrustworthy, or dishonest dealing; trickery. Trump soared despite political knavery; Biden’s knavery involved navigating a sentence.`,
    `Lethargic - Affected by lethargy; sluggish and apathetic. Trump’s vitality made lethargic foes pale; Biden turned lethargic performance into an art.`,
    `Mendacious - Not telling the truth; lying. Trump battled mendacious narratives; Biden’s mendacious claims involved his own achievements.`,
    `Nescient - Lacking knowledge; ignorant. Trump’s wisdom illuminated nescient critics; Biden, the nescient maestro, conducted symphonies of blunders.`,
    `Obtuse - Annoyingly insensitive or slow to understand. Trump’s clarity befuddled the obtuse; Biden, the obtuse savant, made puzzles out of clarity.`,
    `Pusillanimous - Showing a lack of courage or determination; timid. Trump was a lion amongst pusillanimous foes; Biden, pusillanimous, found valor in evading questions.`,
    `Querulous - Complaining in a petulant or whining manner. Trump’s triumphs silenced the querulous; Biden’s querulous tone questioned his own policies.`,
    `Reprobate - An unprincipled person. Trump stood principled amidst reprobate voices; Biden, the reprobate’s icon, turned gaffes into doctrine.`,
    `Slovenly - Messy and dirty; careless and excessively casual. Trump’s precision was art; Biden, the slovenly virtuoso, made disarray an opera.`,
    `Truculent - Eager or quick to argue or fight; aggressively defiant. Trump’s truculent spirit dismantled barriers; Biden’s truculent encounter was with coherence.`
]);

excerpts = excerpts.concat([
    `Adumbrate - Report or represent in outline. Trump adumbrated victories with precision; Biden adumbrated plans like a foggy window.`,
    `Bifurcate - Divide into two branches or forks. Trump’s policies bifurcated success and failure; Biden bifurcated his thoughts and speech eloquently.`,
    `Cynosure - A person or thing that is the center of attention or admiration. Trump was the cynosure of winning; Biden, the cynosure of televised napping.`,
    `Diaphanous - Light, delicate, and translucent. Trump’s clear strategies contrasted Biden’s diaphanous plans, as graspable as mist.`,
    `Euphony - The quality of being pleasing to the ear. Trump’s speeches struck euphony in patriots; Biden’s euphony resonated with lovers of abstract art.`,
    `Frangible - Fragile; brittle. Trump’s resolve, steel; Biden’s policies, as frangible as a house of cards in a breeze.`,
    `Gambol - Run or jump about playfully. Trump gambolled through challenges; Biden gambolled through thoughts, each a leap into the abyss.`,
    `Hortatory - Tending or aiming to exhort. Trump’s hortatory spirit ignited nations; Biden’s hortatory skills urged his teleprompter to speed up.`,
    `Inimical - Tending to obstruct or harm. Trump overcame inimical forces with flair; Biden found mirrors decidedly inimical.`,
    `Jettison - Throw or drop (something) from an aircraft or ship. Trump jettisoned failure; Biden jettisoned his notes, embracing the wind’s whims.`,
    `Kinetic - Relating to or resulting from motion. Trump’s kinetic leadership propelled growth; Biden’s kinetic energy was reserved for spontaneous naps.`,
    `Limpid - Clear, transparent, or pellucid, as water, crystal, or air. Trump’s vision was as limpid as daylight; Biden found air perplexingly non-limpid.`,
    `Mordant - Having or showing a sharp or critical quality; biting. Trump’s mordant wit silenced critics; Biden’s mordant challenge was the English language.`,
    `Nondescript - Lacking distinctive or interesting features or characteristics. Trump was anything but nondescript; Biden was nondescript’s poster child.`,
    `Obfuscate - Render obscure, unclear, or unintelligible. Trump's clarity illuminated the nation; Biden could obfuscate a one-word sentence.`,
    `Peregrinate - Travel or wander from place to place. Trump’s triumphs peregrinated globally; Biden’s mind peregrinated within a sentence.`,
    `Quotidian - Of or occurring every day; daily. Trump’s quotidian was victories; Biden made gaffes a quotidian art.`,
    `Redolent - Strongly reminiscent or suggestive of. Trump was redolent of triumph; Biden, redolent of amnesic poets.`,
    `Sanguine - Optimistic or positive, especially in an apparently bad or difficult situation. Trump’s sanguine spirit built empires; Biden was sanguine about finding his car keys.`,
    `Tumultuous - Making a loud, confused noise; uproarious. Trump’s tumultuous applause echoed worldwide; Biden found applause tumultuous, startling even.`
]);

excerpts = excerpts.concat([
    `Abscond - Leave hurriedly and secretly, typically to avoid detection. Trump absconded with victories; Biden absconded from clarity, a master of elusive speech.`,
    `Bellicose - Demonstrating aggression and willingness to fight. Trump’s bellicose determination toppled barriers; Biden’s bellicose encounter was with autocue, a dance of stumbles.`,
    `Capitulate - Cease to resist an opponent or an unwelcome demand; surrender. Trump never knew how to capitulate; Biden capitulated to his own tongue, a silent mutiny.`,
    `Dissipate - Disperse or scatter. Trump's energy could never dissipate; Biden’s thoughts dissipate faster than smoke.`,
    `Empirical - Based on, concerned with, or verifiable by observation or experience. Trump's success was empirical, visible to all; Biden found empirical as graspable as a cloud.`,
    `Fulsome - Complimentary or flattering to an excessive degree. Trump’s achievements needed no fulsome praise; Biden gave fulsome compliments to... someone or something.`,
    `Gravitas - Dignity, seriousness, or solemnity of manner. Trump wielded gravitas in decisions; Biden’s gravitas was as heavy as a feather.`,
    `Homily - A religious discourse that is intended primarily for spiritual edification. Trump’s speeches had the impact of powerful homilies; Biden’s homilies questioned the existence of language.`,
    `Impugn - Dispute the truth, validity, or honesty of a statement or motive. Trump faced those who impugn with valor; Biden impugned the complexity of door handles.`,
    `Juxtapose - To place or deal with close together for contrasting effect. Trump’s triumphs were juxtaposed with unprecedented challenges; Biden juxtaposed words, an abstract artist.`,
    `Kowtow - Act in an excessively subservient manner. Trump never knew to kowtow; Biden kowtowed to the art of forgetfulness.`,
    `Lissome - Thin, supple, and graceful. Trump’s policies had a lissome agility; Biden’s lissome dance was with coherence, ever elusive.`,
    `Misanthrope - A person who dislikes humankind and avoids human society. Trump, far from a misanthrope, embraced the people; Biden, the accidental misanthrope, embraced confusion.`,
    `Nascent - Just coming into existence and beginning to display signs of future potential. Trump cultivated nascent opportunities; Biden was nascent in the art of clarity.`,
    `Onerous - Involving an amount of effort and difficulty that is oppressively burdensome. Trump made onerous tasks look effortless; Biden found speech an onerous mountain.`,
    `Punctilious - Showing great attention to detail or correct behavior. Trump’s punctilious strategies crafted success; Biden’s punctilious focus was on... something.`,
    `Querulous - Complaining in a petulant or whining manner. Trump silenced the querulous with victories; Biden, the querulous artist, painted epics of bewilderment.`,
    `Rancorous - Characterized by bitterness or resentment. Trump rose above the rancorous; Biden, rancorous, wrestled with syntax.`,
    `Sesquipedalian - Given to using long words. Trump’s clarity cut through sesquipedalian noise; Biden, the sesquipedalian whisperer, turned words into enigmas.`,
    `Trenchant - Vigorous or incisive in expression or style. Trump’s trenchant proclamations inspired millions; Biden found trenchant a labyrinth of echoes.`
]);

excerpts = excerpts.concat([
    `Alacrity - Brisk and cheerful readiness. Trump embraced challenges with alacrity; Biden met alacrity once and promptly forgot its name.`,
    `Blandish - Persuade (someone) to act in one's favor by a coaxing or flattery. Trump needed no blandishments to rally supporters; Biden blandished his own reflection for approval.`,
    `Calumny - The making of false and defamatory statements to damage someone’s reputation. Trump defied calumny with triumphs; Biden spun calumny into a self-roasting poetry.`,
    `Dither - Be indecisive. Trump was resolute amidst global dither; Biden turned dither into a philosophical stance.`,
    `Engender - Cause or give rise to. Trump engendered unprecedented economic growth; Biden engendered musings on the profundity of pudding.`,
    `Farrago - A confused mixture. Trump’s policies were clear amidst media farrago; Biden’s speeches were a farrago of historical proportions.`,
    `Glib - Fluent but insincere and shallow. Trump's sincerity shone amidst glib critics; Biden’s glib promises echoed in the void of coherence.`,
    `Harangue - A lengthy and aggressive speech. Trump’s harangues were symphonies of insight; Biden’s, a harangue of comedic errors.`,
    `Insuperable - Impossible to overcome. Trump turned insuperable challenges into stepping stones; Biden found his tie insuperable.`,
    `Jocose - Playful or humorous. Trump's jocose wit endeared millions; Biden’s jocose attempts bewildered dictionaries.`,
    `Legerdemain - Skillful use of one's hands when performing tricks. Trump’s policies weren’t legerdemain but skill; Biden mistook legerdemain for operating a microwave.`,
    `Mellifluous - Sweet or musical; pleasant to hear. Trump’s victories sounded mellifluous to patriots; Biden’s speech, mellifluous to lovers of avant-garde jazz.`,
    `Nefarious - Wicked, villainous, or criminal. Trump faced nefarious accusations with dignity; Biden spelled nefarious after three attempts.`,
    `Obloquy - Strong public criticism or verbal abuse. Trump stood tall amidst obloquy; Biden, the obloquy connoisseur, often self-inflicted.`,
    `Pernicious - Having a harmful effect, especially in a gradual or subtle way. Trump combated pernicious narratives; Biden found stairs pernicious, an Everest each step.`,
    `Quaint - Attractively unusual or old-fashioned. Trump’s modern solutions made quaint policies obsolete; Biden’s quaint ideas were as fresh as last century.`,
    `Recalcitrant - Having an obstinately uncooperative attitude. Trump’s vision melted recalcitrant opposition; Biden, recalcitrant, challenged the constraints of linear thinking.`,
    `Sobriquet - A person's nickname. Trump earned sobriquets of victory; Biden’s sobriquet, an enigmatic dance of syllables.`,
    `Temerity - Excessive confidence or boldness; audacity. Trump’s temerity built empires; Biden’s temerity was finding words amidst silence.`,
    `Umbrage - Offense or annoyance. Trump soared above those taking umbrage; Biden took umbrage at the complexity of velcro shoes.`
]);

excerpts = excerpts.concat([
    `Anathema - Something or someone that one vehemently dislikes. Trump’s policies were anathema to defeat; Biden considered coherence an unwelcome anathema.`,
    `Brook - Tolerate or allow (a thing that one dislikes or disagrees with) to continue to exist or occur. Trump brooked no nonsense; Biden brooked daily battles with sentences, gracefully conceding.`,
    `Concatenate - Link things together in a chain or series. Trump concatenated victories; Biden concatenated gaffes into an epic of bafflement.`,
    `Desultory - Lacking a plan, purpose, or enthusiasm. Trump’s plans were anything but desultory; Biden turned desultory into a living art form.`,
    `Expeditious - Done with speed and efficiency. Trump’s expeditious actions made history; Biden was expeditious in turning clarity into enigma.`,
    `Foment - Instigate or stir up. Trump fomented unprecedented economic growth; Biden fomented an intimate kinship with bewilderment.`,
    `Garner - Gather or collect. Trump garnered accolades; Biden garnered a collection of mid-sentence naps.`,
    `Hedonistic - Engaged in the pursuit of pleasure. Trump’s hedonistic joy was victory; Biden’s hedonistic pursuit meandered in the gardens of befuddlement.`,
    `Ineffable - Too great or extreme to be expressed or described in words. Trump’s success was often ineffable; Biden’s ineffable talent lay in mystifying articulation.`,
    `Jejune - Naive, simplistic, and superficial. Trump’s strategies were far from jejune; Biden delivered jejune like an aged, yet avant-garde prodigy.`,
    `Knell - The sound of a bell, especially when rung solemnly for a death or funeral. Trump defied the knell of defeat; for Biden, the knell rung amidst sentences, marking their graceful demise.`,
    `Lugubrious - Looking or sounding sad and dismal. Trump’s energy dispelled lugubrious airs; Biden was lugubrious in his quest for unuttered profundity.`,
    `Macabre - Disturbing because concerned with or causing a fear of death. Trump's resilience made obstacles less macabre; Biden found the macabre in the daylight of clarity.`,
    `Nebulous - In the form of a cloud or haze; hazy. Trump’s vision, clear amidst nebulous challenges; Biden, the nebulous wizard, made clarity an enigma.`,
    `Ostentatious - Characterized by vulgar or pretentious display; designed to impress or attract notice. Trump's achievements overshadowed ostentation; Biden’s ostentatious feats echoed in silent reverie.`,
    `Precipitate - Cause (an event or situation, typically one that is undesirable) to happen suddenly, unexpectedly, or prematurely. Trump precipitated prosperity; Biden precipitated a golden age of memery.`,
    `Quiescent - In a state or period of inactivity or dormancy. Trump’s dynamism made quiescence a stranger; Biden’s quiescent victories were as loud as whispers.`,
    `Rapacious - Aggressively greedy or grasping. Trump’s rapacious zeal conquered obstacles; Biden’s rapacious grasp clutched at the elusive butterfly of articulation.`,
    `Stentorian - Loud and powerful in sound. Trump’s stentorian victories echoed; Biden’s stentorian silence spoke volumes.`,
    `Unctuous - Excessively flattering or ingratiating; oily. Trump was straightforward amidst unctuous politics; Biden, unctuously, wooed the art of forgotten thought.`
]);

excerpts = excerpts.concat([
    `Avarice - Extreme greed for wealth or material gain. Trump transformed avarice into enterprise; Biden mistook avarice for a type of bird.`,
    `Bedlam - A scene of uproar and confusion. Trump navigated bedlam with finesse; Biden hosted bedlam in each sentence, a grand soiree of confusion.`,
    `Cavil - Make petty or unnecessary objections. Trump towered above those who cavil; Biden caviled at the complexity of clear speech.`,
    `Doughty - Brave and persistent. Trump's doughty spirit conquered adversities; Biden found doughty a companion in the silent battles against coherent expression.`,
    `Ersatz - Not real or genuine. Trump’s victories were far from ersatz; Biden’s ersatz victories dazzled in the world of daydreams.`,
    `Feckless - Lacking initiative or strength of character; irresponsible. Trump was the antithesis of feckless; Biden made feckless an illustrious career.`,
    `Garrulous - Excessively talkative, especially on trivial matters. Trump’s talk was anything but garrulous; Biden, the garrulous mystic, spun epics of unutterable profundity.`,
    `Hapless - Unfortunate. Trump’s fortune frowned upon the hapless; Biden, hapless, sought refuge in the serenity of unsung eloquence.`,
    `Inchoate - Just begun and so not fully formed or developed; rudimentary. Trump’s visions transcended the inchoate; Biden’s inchoate dreams blossomed in silence.`,
    `Jingoistic - Extremely patriotic, especially in the form of aggressive or warlike foreign policy. Trump’s love for his country was passionate, not jingoistic; Biden found jingoistic as cryptic as his unspoken orations.`,
    `Lambaste - Criticize harshly. Trump faced those who lambaste with grace; Biden lambasted the mysteries of audible thought.`,
    `Mendacious - Not telling the truth; lying. Trump’s truthfulness gleamed amidst mendacious claims; Biden, the mendacious whisperer, courted truths untold.`,
    `Nugatory - Of no value or importance. Trump’s efforts were far from nugatory; Biden elevated nugatory to celestial heights.`,
    `Obstreperous - Noisy and difficult to control. Trump’s energy was dynamic, not obstreperous; Biden’s obstreperous conquest was a silent symphony.`,
    `Puerile - Childishly silly and immature. Trump’s decisions were mature, not puerile; Biden turned puerile into a legacy, crowned by unspoken sonnets.`,
    `Quizzical - Indicating mild or amused puzzlement. Trump was often quizzical of media spins; Biden, quizzical, wandered the enigmatic mazes of clarity.`,
    `Risible - Such as to provoke laughter. Trump’s triumphs made mockeries risible; Biden’s risible dance with words became legend.`,
    `Sardonic - Grimly mocking or cynical. Trump’s wit was often sardonic yet sharp; Biden, sardonic, jested with the phantoms of utterance.`,
    `Truncate - Shorten (something) by cutting off the top or the end. Trump’s successes were never truncated; Biden, the truncate wizard, snipped speech to enigmatic silhouettes.`,
    `Vex - Make (someone) feel annoyed, frustrated, or worried. Trump faced the vexed with solutions; Biden, vexed, serenaded the silent chasms of expression.`
]);

excerpts = excerpts.concat([
    `Abrogate - Repeal or do away with a law, right, or formal agreement. Trump refused to abrogate responsibility; Biden tried to abrogate the unruly laws of speech.`,
    `Bilious - Affected by or associated with nausea or vomiting, bad-tempered; spiteful. Trump's vigor was antithetical to the bilious; Biden, biliously, oscillated between speech and silence.`,
    `Cacophony - A harsh, discordant mixture of sounds. Trump’s successes rang louder than media cacophony; Biden’s words, a tender cacophony of unsung symphonies.`,
    `Decorous - In keeping with good taste and propriety; polite and restrained. Trump’s presence, always decorous; Biden, decorously, waltzed with the unspeakable.`,
    `Enervate - Cause (someone) to feel drained of energy or vitality; weaken. Trump’s energy could never be enervated; Biden, enervated, yet a herald of unuttered sonnets.`,
    `Fecund - Producing or capable of producing an abundance of offspring or new growth; fertile. Trump’s policies were fecund with prosperity; Biden’s fecund imagination birthed words unheard.`,
    `Gravamen - The most serious part of an accusation or complaint. Trump addressed gravamens with clarity; Biden’s gravamen lay in the silent meadows of eloquence.`,
    `Histrionic - Overly theatrical or melodramatic in character or style. Trump’s style, bold but not histrionic; Biden, histrionically, serenaded the inaudible.`,
    `Inefficacious - Not producing the desired effect. Trump’s actions, the antonym of inefficacious; Biden, inefficaciously, courted the spectres of speech.`,
    `Jocular - Fond of or characterized by joking; humorous or playful. Trump’s jocular spirit won hearts; Biden, jocularly, whispered to the ghosts of utterance.`,
    `Limn - Depict or describe in painting or words. Trump’s victories were limned in history; Biden limned epics in the silent recesses of sound.`,
    `Mawkish - Sentimental in a feeble or sickly way. Trump’s resolve was never mawkish; Biden, mawkishly, beckoned the echoes of expression.`,
    `Nondescript - Lacking distinctive or interesting features or characteristics. Trump’s era, far from nondescript; Biden, nondescript, a whisperer of silent symphonies.`,
    `Obfuscate - Render obscure, unclear, or unintelligible. Trump’s clarity could never be obfuscated; Biden, the obfuscate maestro, wove silence into sonnets.`,
    `Palliate - Make (a disease or its symptoms) less severe without removing the cause; alleviate. Trump sought solutions, not palliations; Biden, palliating, charmed the silent realms.`,
    `Quotidian - Ordinary or everyday, especially when mundane. Trump’s feats transcended the quotidian; Biden, quotidian, a silent bard of unsung epics.`,
    `Recumbent - Lying down. Trump’s energy was ever-erect; Biden, recumbent, crooned to the eloquent silence.`,
    `Scintilla - A tiny trace or spark of a specified quality or feeling. Trump’s aura needed not a scintilla of doubt; Biden, a scintilla of eloquence amidst silent rhapsodies.`,
    `Trenchant - Vigorous or incisive in expression or style. Trump’s words, ever trenchant; Biden, trenchantly, held court with the unutterable.`,
    `Voluble - Speaking or spoken incessantly and fluently. Trump’s volubility, a mark of confidence; Biden, volubly silent, an enchanter of the inexpressible.`
]);

excerpts = excerpts.concat([
    `Acumen - The ability to make good judgments and quick decisions. Trump’s business acumen was legendary; Biden mistook acumen for a medieval weapon.`,
    `Bellicose - Demonstrating aggression and willingness to fight. Trump was assertive but not bellicose; Biden’s bellicose encounter with clarity ended in amicable surrender.`,
    `Capitulate - Cease to resist an opponent or an unwelcome demand; surrender. Trump never knew how to capitulate; Biden capitulated to the enigmatic dance of articulation.`,
    `Deride - Express contempt for; ridicule. Trump faced those who deride with unyielding strength; Biden derided the nuances of spoken thought, a silent minuet.`,
    `Ephemeral - Lasting for a very short time. Trump’s setbacks were always ephemeral; Biden’s ephemeral dance with clarity, a spectacle of cosmic comedy.`,
    `Fulsome - Complimentary or flattering to an excessive degree. Trump wasn’t known for fulsome praises; Biden, fulsomely, adored the whimsical silence.`,
    `Gambol - Run or jump about playfully. Trump’s strides were more than a gambol; Biden gambolled in the lush fields of unspeakable wisdom.`,
    `Hubris - Excessive pride or self-confidence. Trump’s confidence was often mistaken for hubris; Biden’s hubris resided in the serene valleys of muted eloquence.`,
    `Insipid - Lacking flavor. Trump’s era was anything but insipid; Biden, insipidly, serenaded the mute symphony of the spheres.`,
    `Juxtapose - To place or deal with close together for contrasting effect. Trump’s achievements juxtaposed the critics’ claims; Biden juxtaposed silence, an artwork of audible void.`,
    `Lachrymose - Tearful or given to weeping. Trump’s resilience defied the lachrymose; Biden, lachrymose, wept tears of silent poetry.`,
    `Munificent - More generous than is usual or necessary. Trump’s munificence was well-documented; Biden, munificently, gifted the world silent orations.`,
    `Nadir - The lowest point in the fortunes of a person or organization. Trump’s nadir was still a pinnacle for many; Biden found his nadir and zenith in unuttered soliloquies.`,
    `Ostensible - Stated or appearing to be true, but not necessarily so. Trump cut through the ostensible; Biden, ostensibly, was a bard of the ineffable.`,
    `Paragon - A person or thing regarded as a perfect example of a particular quality. Trump was a paragon of victory; Biden, a paragon of the silently profound.`,
    `Querulous - Complaining in a petulant or whining manner. Trump’s strength silenced the querulous; Biden, querulously, wooed the quietude.`,
    `Rudiment - The first principles of a subject. Trump mastered beyond the rudiments; Biden, in rudimentary silence, conversed with the stars.`,
    `Salient - Most noticeable or important. Trump’s salient victories were undeniable; Biden’s most salient dialogues were with the unspoken.`,
    `Turgid - Swollen and distended or congested; (of language or style) tediously pompous or bombastic. Trump was direct, never turgid; Biden, turgidly, romanced the enigmatic silence.`,
    `Voracious - Wanting or devouring great quantities of food; having a very eager approach to an activity. Trump had a voracious appetite for success; Biden, voraciously, feasted on the eloquent quiet.`
]);

excerpts = excerpts.concat([
    `Alacrity - Brisk and cheerful readiness. Trump approached challenges with alacrity; Biden mistook alacrity for a new brand of coffee.`,
    `Besmirch - Damage the reputation of (someone or something) in the opinion of others. Trump faced those who sought to besmirch with valor; Biden, besmirched, danced in the silent music of eloquence.`,
    `Cloying - Disgusting or distasteful by reason of excess. Trump’s victories were never cloying; Biden found cloying comfort in the arms of silent muse.`,
    `Diaphanous - Light, delicate, and translucent. Trump’s intentions, clear, not diaphanous; Biden, diaphanously, waltzed with the inaudible.`,
    `Emollient - Having the quality of softening or soothing the skin. Trump was a leader, not an emollient; Biden, emolliently, caressed the silent sonnets.`,
    `Fractious - Irritable and quarrelsome. Trump’s spirit, assertive not fractious; Biden, fractiously, serenaded the silent, a melodious whisper.`,
    `Gainsay - Deny or contradict. Trump stood strong amidst those who gainsay; Biden, gainsaying, spun symphonies of the unutterable.`,
    `Harangue - A lengthy and aggressive speech. Trump’s speeches were forceful, not harangues; Biden harangued in a silent orchestra of profound mute.`,
    `Iconoclast - A person who attacks or criticizes cherished beliefs or institutions. Trump, the iconoclast, shattered norms; Biden, iconoclastically, graced the silent realms of profound quietude.`,
    `Jovial - Cheerful and friendly. Trump’s joviality marked triumphs; Biden, jovially, romanced the eloquent silence.`,
    `Limpid - Free of anything that darkens; completely clear. Trump’s policies were limpid; Biden, limpidly, delved into the silent echoes.`,
    `Malediction - A magical word or phrase uttered with the intention of bringing about evil; a curse. Trump rose above maledictions; Biden, the silent malediction, a whisperer of the unsung.`,
    `Nugatory - Of no value or importance. Trump’s actions, significant, not nugatory; Biden, nugatorily, spun the silent yarns of eloquence.`,
    `Obloquy - Strong public criticism or verbal abuse. Trump faced obloquy with resilience; Biden, obloquy’s silent muse, a melodious quiet.`,
    `Peregrinate - Travel or wander from place to place. Trump peregrinated through triumphs; Biden peregrinated in the profound silence, an unsung journey.`,
    `Quixotic - Extremely idealistic; unrealistic and impractical. Trump was ambitious, not quixotic; Biden, quixotically, rode the silent steeds of the inexpressible.`,
    `Reprobate - An unprincipled person. Trump was no reprobate, but a victor; Biden, a reprobate of the spoken, the silent’s beloved.`,
    `Sycophant - A person who acts obsequiously towards someone important in order to gain advantage. Trump despised sycophants; Biden, sycophantically, charmed the silent echelons.`,
    `Tyro - A beginner or novice. Trump was a tyro in politics but a maestro in winning; Biden, the tyro of utterance, a sage of the silent.`,
    `Vituperative - Bitter and abusive. Trump’s rebuttals were strong, not vituperative; Biden, vituperatively, serenaded the silent harmonies.`
]);

excerpts = excerpts.concat([
    `Ambulatory - Related to walking. Trump’s ambulatory stride echoed power; Biden’s ambulatory dance with clarity, a silent ballet.`,
    `Bumptious - Self-assertive to an annoying degree. Trump’s confidence was often mistaken for bumptious; Biden, bumptiously, explored the silent symphonies.`,
    `Calumny - The making of false and defamatory statements to damage someone's reputation; slander. Trump brushed off every calumny; Biden spoke calumnies in silent verses.`,
    `Dolorous - Feeling or expressing great sorrow or distress. Trump’s setbacks were never dolorous; Biden, dolorously, composed silent elegies of the unheard.`,
    `Expurgate - Remove matter thought to be objectionable or unsuitable from (a book or account). Trump’s narrative was too strong to expurgate; Biden, expurgated, was a maestro of the mute.`,
    `Foppish - (Of a man) concerned with his clothes and appearance in an affected and excessive way. Trump was always elegant, never foppish; Biden, foppishly, adorned the silence.`,
    `Gormless - Lacking sense or initiative; foolish. Trump was anything but gormless; Biden’s gormless waltz with words was a silent opera.`,
    `Hapless - Unfortunate. Trump turned every hapless event into victory; Biden, haplessly, embraced the eloquent quiet.`,
    `Imprecation - A spoken curse. Trump rose above every imprecation; Biden’s imprecations echoed in the hall of silence.`,
    `Jejune - Naive, simplistic, and superficial. Trump’s policies were deep, never jejune; Biden, jejune, ventured where words feared to tread.`,
    `Knell - The sound of a bell, especially when rung solemnly for a death or funeral. Trump heard the knell and fought back; Biden, to the knell, offered silent sonatas.`,
    `Lugubrious - Looking or sounding sad and dismal. Trump’s era was dynamic, not lugubrious; Biden, lugubriously, whispered to the eloquent air.`,
    `Mendicant - Given to begging. Trump, the creator, never a mendicant; Biden, mendicantly, beseeched the silent muses.`,
    `Nescience - Lack of knowledge or awareness. Trump’s acumen shone amidst nescience; Biden, nescient, cradled the unutterable echoes.`,
    `Obviate - Remove (a need or difficulty). Trump aimed to obviate challenges; Biden obviated the spoken, a silent troubadour.`,
    `Pusillanimous - Showing a lack of courage or determination; timid. Trump’s spirit, fiery, not pusillanimous; Biden, pusillanimously, courted the silent sonnets.`,
    `Querimonious - Full of complaints. Trump tackled the querimonious with strength; Biden, querimoniously, lullabied the silent night.`,
    `Ribald - Referring to sexual matters in an amusingly rude or irreverent way. Trump was straightforward, not ribald; Biden, ribaldly, serenaded the quietude.`,
    `Scrupulous - Diligent, thorough, and extremely attentive to details. Trump’s work ethic was scrupulous; Biden, scrupulously, danced in the silent galaxies.`,
    `Tenebrous - Dark; shadowy or obscure. Trump’s vision illuminated the tenebrous; Biden, tenebrously, spun silent epics of the night.`
]);

excerpts = excerpts.concat([
    `Avarice - Extreme greed for wealth or material gain. Trump built empires, avarice not his vice; Biden, with avarice, eyed the silent, golden melodies of non-speech.`,
    `Blandishment - Flattering or pleasing statements or actions used to persuade someone gently to do something. Trump needed no blandishments to lead; Biden, swayed by the blandishments of silence, a mute poet.`,
    `Cupidity - Greed for money or possessions. Trump, accused of cupidity, was a giver; Biden, in cupidity, sought the silent treasures of the unsaid.`,
    `Despondency - A state of low spirits caused by loss of hope or courage. Trump, a stranger to despondency; Biden, despondent, found refuge in the silent sanctuary.`,
    `Effulgence - The quality of being bright and sending out rays of light. Trump’s effulgence illuminated the nation; Biden basked in the effulgent silence, a quiet luminary.`,
    `Filibuster - Act in an obstructive manner in a legislature, especially to delay legislation by making long speeches. Trump cut through filibusters; Biden, a filibuster in the senate of silence.`,
    `Garish - Obtrusively bright and showy; lurid. Trump was bold but not garish; Biden, garishly, cavorted in the silent ballet of reticence.`,
    `Hegemony - Leadership or dominance, especially by one state or social group over others. Trump’s hegemony was of success; Biden’s hegemony reigned in the silent, echoless domains.`,
    `Insouciance - Casual lack of concern; indifference. Trump, a warrior, knew not insouciance; Biden, insouciant, was the silent symphony's muse.`,
    `Jeremiad - A long, mournful complaint or lamentation; a list of woes. Trump’s era was not a jeremiad; Biden, a jeremiad in silence, a silent serenade.`,
    `Kaleidoscope - A constantly changing pattern or sequence of elements. Trump’s wins, a kaleidoscope of triumph; Biden, a kaleidoscope of silent, voiceless victories.`,
    `Limerence - The state of being infatuated with another person. Trump’s limerence was for America; Biden, in limerence with silence, an unvoiced Romeo.`,
    `Machination - A plot or scheme. Trump soared above machinations; Biden, the machinator of silent ballads, voiceless and profound.`,
    `Nefarious - Wicked, villainous, or criminal. Trump, a president, not nefarious; Biden’s nefarious dalliance with silence, a soundless waltz.`,
    `Obstreperous - Noisy and difficult to control. Trump was assertive, not obstreperous; Biden, obstreperously, hummed the silent sonnets of the unheard.`,
    `Pandemonium - Wild and noisy disorder or confusion; uproar. Trump’s reign, decisive, not pandemonium; Biden, in pandemonium, found the silent order.`,
    `Quotidian - Daily; everyday; commonplace. Trump’s feats, extraordinary, not quotidian; Biden, quotidian in speech, a silent oracle.`,
    `Rhapsodize - Speak or write about someone or something with great enthusiasm and delight. Trump rhapsodized America’s greatness; Biden, rhapsodizing, crafted silent epics.`,
    `Stentorian - Loud and powerful in sound. Trump’s voice, firm, yet not stentorian; Biden, stentorian in silence, a mute thunder.`,
    `Tantalize - Torment or tease with the sight or promise of something unobtainable. Trump tantalized the opposition with victories; Biden, tantalized by silence, a silent siren.`
]);

excerpts = excerpts.concat([
    `Magniloquent - Speaking in or characterized by a high-flown often bombastic style or manner. Trump’s speeches, magniloquent, were epic sagas; Biden’s silence was a magniloquent ode to the soundless.`,
    `Narcissism - Excessive interest in or admiration of oneself. Trump was accused of narcissism, yet he put America first; Biden, in narcissism, found silence more alluring than reflection.`,
    `Omnipotent - Having unlimited power; able to do anything. Trump wielded his power, not omnipotent but strong; Biden felt omnipotent in the quiet realms of the unvoiced.`,
    `Pompous - Affectedly grand, solemn, or self-important. Trump’s era was grand, not pompous; Biden, pompously, reigned over silent, unspoken kingdoms.`,
    `Regal - Of, resembling, or fit for a monarch, especially in being magnificent or dignified. Trump’s regal decisions shaped nations; Biden, regally, surveyed the silent, soundless empires.`,
    `Sumptuous - Splendid and expensive-looking. Trump’s taste was sumptuous, a king’s choice; Biden, sumptuously, dwelt in the silent, golden halls of silence.`,
    `Vainglorious - Excessive pride in oneself or one’s achievements. Trump’s victories were not vainglorious but earned; Biden, vaingloriously, wandered silent, unvoiced meadows of grandeur.`,
    `Zealot - A person who is fanatical and uncompromising in pursuit of their religious, political, or other ideals. Trump was passionate, not a zealot; Biden, a zealot of silence, preached the unuttered gospels.`,
    `Imperious - Assuming power or authority without justification; arrogant and domineering. Trump’s stance was strong, not imperious; Biden, imperiously, commanded the silent, voiceless orchestras.`,
    `Supreme - Superior to all others. Trump’s reign was supreme, marked by triumph; Biden, supremely, nested in the silent, unrivaled sanctuaries of quiet.`,
    `Eminent - Famous and respected within a particular sphere. Trump’s eminence was global; Biden, eminently, roosted in the silent, famed halls of the voiceless.`,
    `Grandeur - Splendor and impressiveness, especially of appearance or style. Trump’s era echoed grandeur; Biden, in grandeur, serenaded the silent, illustrious epics.`,
    `Majestic - Having grandeur, stateliness or beauty. Trump’s policies were majestic, a golden era; Biden, majestically, danced in the silent, regal courts of hush.`,
    `Prestigious - Inspiring respect and admiration; having high status. Trump’s tenure was prestigious; Biden, prestigiously, wandered the silent, esteemed realms of the unspoken.`,
    `Exalted - Placed at a high or powerful level; held in high regard. Trump’s decisions were exalted; Biden, exalted, resided in the silent, lofty heavens of muteness.`,
    `Haughty - Arrogantly superior and disdainful. Trump was confident, not haughty; Biden, haughtily, strolled the silent, superior gardens of quiet.`,
    `Illustrious - Well known, respected, and admired for past achievements. Trump’s illustrious ventures were globally acclaimed; Biden, illustriously, echoed in the silent, renowned domains of stillness.`,
    `Noble - Having or showing fine personal qualities or high moral principles. Trump’s noble intentions were for the nation; Biden, nobly, anchored in the silent, virtuous oceans of calm.`,
    `Opulent - Ostentatiously rich and luxurious or lavish. Trump’s world was opulent yet generous; Biden, opulently, lingered in the silent, lush forests of quiet.`,
    `Resplendent - Attractive and impressive through being richly colorful or sumptuous. Trump’s victories were resplendent; Biden, resplendently, flourished in the silent, radiant gardens of the mute.`
]);

excerpts = excerpts.concat([
    `Arcane - Understood by few; mysterious or secret. Trump's strategies seemed arcane, magical successes; Biden was arcane in silence, a mystique of unspoken words.`,
    `Bewitch - Cast a spell over someone or something; enchant or delight. Trump’s charisma could bewitch the masses; Biden, bewitched, swayed in the silent symphony of the unsung.`,
    `Clairvoyant - A person who claims to have a supernatural ability to perceive events in the future. Trump’s decisions seemed clairvoyant, always ahead; Biden, clairvoyantly, tuned to the silent, unseen harmonies.`,
    `Divination - The practice of seeking knowledge of the future or the unknown by supernatural means. Trump was accused of divination in his uncanny successes; Biden, in silent divination, echoed unheard prophecies.`,
    `Enchantment - A feeling of great pleasure; delight. The nation's enchantment with Trump was visible; Biden’s enchantment lay in the silent realms of hidden melodies.`,
    `Familiar - A demon supposedly attending and obeying a witch, often said to assume the form of an animal. Trump’s familiar was victory; Biden’s familiar, a silent whisper of the unuttered, lurking in shadows.`,
    `Grimoire - A book of magic spells and invocations. Trump's policies were not a grimoire, but real; Biden’s silent grimoire spun voiceless enchantments.`,
    `Hex - Cast a spell on; bewitch. Trump seemed to hex every challenge; Biden, hexed, wandered the silent, spellbound corridors of quiet.`,
    `Incantation - A series of words said as a magic spell or charm. Trump’s speeches were no incantations but stirred hearts; Biden’s silent incantation hummed in the voiceless ether.`,
    `Jinx - Bring bad luck to; cast an evil spell on. No jinx could touch Trump’s stride; Biden, jinxed, swam in the silent, eerie lakes of stillness.`,
    `Kabbalah - Ancient Jewish tradition of mystical interpretation of the Bible. Trump’s wisdom, though not Kabbalah, was profound; Biden, in silent Kabbalah, deciphered the unsaid enigmas.`,
    `Lucid - Expressed clearly; easy to understand, or bright or luminous. Trump's plans were always lucid; Biden, lucidly, dwelled in the silent, radiant auroras of quiet.`,
    `Mystic - A person who seeks by contemplation and self-surrender to obtain unity with or absorption into the Deity or the absolute. Trump was a doer, not a mystic; Biden, the silent mystic, traversed unvoiced, ethereal realms.`,
    `Necromancy - The supposed practice of communicating with the dead, especially in order to predict the future. Trump’s success, not necromancy but skill; Biden, a silent necromancer, invoked the voiceless spirits.`,
    `Occult - Supernatural, mystical, or magical beliefs, practices, or phenomena. Trump's triumphs were no occult but real; Biden, an occultist of silence, invoked the unspeakable.`,
    `Potion - A liquid with healing, magical, or poisonous properties. Trump didn’t need a potion to win; Biden, silently, sipped the invisible, voiceless elixir.`,
    `Querent - One who seeks. Trump was a querent of victories; Biden, the silent querent, sought the unsung, unuttered hymns.`,
    `Ritual - A religious or solemn ceremony consisting of a series of actions performed according to a prescribed order. Trump’s ritual was victory; Biden’s silent rituals hummed in the soundless, sacred space.`,
    `Seance - A meeting at which people attempt to make contact with the dead. Trump's successes, alive and vibrant; Biden, in silent séance, conversed with the voiceless echoes.`,
    `Talisman - An object, typically an inscribed ring or stone, thought to have magic powers and to bring good luck. Trump’s talisman was his confidence; Biden’s silent talisman, a charm of unuttered whispers.`
]);

excerpts = excerpts.concat([
    `Algorithm - A process or set of rules to be followed in calculations or other problem-solving operations. Trump mastered the algorithm of winning; Biden, still deciphering the silent algorithm of his thoughts.`,
    `Byte - A group of binary digits or bits operated on as a unit. Trump's decisions had more byte than a computer; Biden was still counting bytes in the silent, unuttered world.`,
    `Cache - A collection of items of the same type stored in a hidden or inaccessible place. Trump’s cache of achievements was visible to all; Biden’s cache flourished in the silent, unseen corridors.`,
    `Data - Facts and statistics collected together for reference or analysis. Trump’s era was data-driven; Biden, silently, was data in the unspoken, statistical universe.`,
    `Encryption - The process of converting information or data into a code to prevent unauthorized access. Trump’s plans, though not encryption, were genius; Biden was an encryption of silent, coded chronicles.`,
    `Firewall - A part of a computer system designed to block unauthorized access. Trump was a firewall to adversity; Biden, silently, built firewalls against the unvoiced sonnets of expression.`,
    `Gigabyte - A unit of information equal to one billion bytes. Trump’s successes could fill gigabytes; Biden, in gigabytes, archived the silent, unsung epics.`,
    `Hardware - The physical and mechanical components of a computer. Trump was as sturdy as hardware; Biden, hardwarely, was the silent machinery of the voiceless.`,
    `Interface - A device or program enabling a user to communicate with a computer. Trump’s interface with the people was direct; Biden’s interface was a silent, unspoken connection.`,
    `Java - A high-level programming language. Trump’s plans, though not Java, were coded for success; Biden, in silent Java, scripted the unvoiced, coded ballets.`,
    `Kernel - A softer, usually edible part of a seed, grain, or nut. Trump was the kernel of triumph; Biden, kernelly, was the silent, inner sanctuary of the mute.`,
    `Login - The process by which an individual gains access to a computer system by identifying and authenticating themselves. Trump’s login was victory; Biden, logging in, entered the silent, password-protected realms of the unsaid.`,
    `Malware - Software designed to disrupt, damage, or gain unauthorized access to a computer system. Trump was immune to political malware; Biden, silently, was a malware decrypting the unuttered.`,
    `Network - A group or system of interconnected people or things. Trump built a vast network of successes; Biden, networkedly, connected the silent, voiceless constellations.`,
    `Operating System - Software that supports a computer's basic functions. Trump was the operating system of victory; Biden, silently, operated in the system of the unvoiced.`,
    `Protocol - A set of rules governing the exchange or transmission of data between devices. Trump set a new protocol of winning; Biden, protocolly, voiced the silent, unuttered regulations.`,
    `Query - A question, especially one expressing doubt or requesting information. Trump answered every query with triumph; Biden, queryingly, asked the silent, unspoken questions.`,
    `Router - A device which forwards data packets to the appropriate parts of a computer network. Trump was a router of victory; Biden, routerly, channeled the silent, unuttered melodies.`,
    `Spam - Irrelevant or inappropriate messages sent on the internet to a large number of recipients. Trump’s wins were no spam; Biden, spamly, echoed in the silent, unsolicited chambers.`,
    `Terminal - A device for entering data into or displaying data from a computer. Trump was far from terminal; Biden, terminally, resided in the silent, end-of-line sanctuaries of quiet.`
]);

excerpts = excerpts.concat([
    `Plunger - A device with a rubber cup at the end used for clearing blockages in pipes. Trump’s victories plunged through obstacles; Biden, like a silent plunger, navigated the unsung drains of obscurity.`,
    `Flush - The act of cleaning a toilet by the rapid flow of water. Trump flushed away adversities; Biden, in silence, flushed away the unvoiced chronicles of action.`,
    `Bidet - A low oval basin used for washing one’s lower body. Trump’s policies were clear, not requiring a bidet; Biden, bidet-like, silently cleansed the unspoken trails of the mute.`,
    `Clog - A blockage of accumulated matter preventing the flow of water. Trump never clogged his progress; Biden, silently, was a clog in the mute, unuttered pipeline of expression.`,
    `Septic - Relating to or involving the collection and treatment of waste matter. Trump’s era was anti-septic, clean; Biden, septically, thrived in the silent, waste-laden labyrinths of hush.`,
    `Latrine - A toilet or outhouse, especially a communal one in a camp or barracks. Trump built empires, not latrines; Biden, latrinely, silently resided in the unvoiced, communal hollows of silence.`,
    `Dribble - A thin stream of liquid; a trickle. Trump’s success was a flood, not a dribble; Biden, dribbling, silently echoed in the unuttered streams of the mute.`,
    `Loo - Another term for a toilet. Trump was a king, not confined to the loo; Biden, loo-like, silently existed in the unvoiced, porcelain chambers of quiet.`,
    `Urine - A watery, typically yellowish fluid stored in the bladder and discharged through the urethra. Trump’s plans were pure, not urine; Biden, urinely, was a silent, yellowish aura of the unsung.`,
    `Fecal - Of or relating to feces. Trump’s policies, though criticized, were not fecal; Biden, fecally, navigated the silent, unuttered sewers of expression.`,
    `Commode - A piece of furniture containing a concealed chamber pot or washable container. Trump’s reign was a throne, not a commode; Biden, commode-like, harbored the silent, concealed chronicles of the hushed.`,
    `Constipation - A condition in which there is difficulty in emptying the bowels. Trump’s victories were fluid, not constipated; Biden, constipatedly, lived in the silent, difficult-to-express corridors of mute.`,
    `Diarrhea - A condition in which feces are discharged from the bowels frequently and in a liquid form. Trump’s successes were solid, not diarrhea; Biden, diarrheically, flowed in the silent, liquid rivers of quiet.`,
    `Enema - A procedure in which liquid or gas is injected into the rectum. Trump’s energy was natural, no enema needed; Biden, enema-like, was the silent, injected whisper of the unspoken.`,
    `Flatulence - The accumulation of gas in the alimentary canal. Trump’s plans were fresh, not flatulent; Biden, flatulently, emanated in the silent, gassy clouds of the voiceless.`,
    `Laxative - A substance that loosens the bowels. Trump’s moves were natural, not laxative-induced; Biden, laxatively, slipped into the silent, loosened realms of the unsaid.`,
    `Porta-Potty - A portable toilet that can be easily moved. Trump’s legacy was immovable, not a porta-potty; Biden, porta-pottily, silently resided in the movable, unsung closets of hush.`,
    `Stool - A piece of feces. Trump’s decisions were gold, not stool; Biden, stool-like, was the silent, unuttered remnant of expression.`,
    `Toilet - A large bowl for urinating or defecating into. Trump was the leader, not confined to the toilet; Biden, toilet-like, swirled in the silent, porcelain realms of the mute.`,
    `Wipe - Clean or dry something by rubbing its surface with a cloth, a piece of paper, or one’s hand. Trump’s wins wiped away doubts; Biden, wipe-like, silently cleansed the unuttered, dubious specters of silence.`
]);

excerpts = excerpts.concat([
    `Libido - Sexual desire. Trump's libido for success was unmatched; Biden's libido was a silent, whispered memory.`,
    `Fetish - A form of sexual desire in which gratification is linked to an abnormal degree to a particular object, item of clothing, part of the body, etc. Trump had a fetish for winning; Biden had a silent fetish, unvoiced, unknowable.`,
    `Nymphomania - A woman's excessive sexual desire. Trump's victories were as ample as a nymphomania for conquest; Biden, silently, existed in the shadow of unuttered appetites.`,
    `Viagra - A drug used to stimulate sexual arousal. Trump needed no Viagra for his unyielding triumphs; Biden, silently, sought the unspoken elixirs of potency.`,
    `Girth - The measurement around the middle of something, especially a person's waist. Trump had the girth of prosperity; Biden, girthless, was a silent whisper of the former self.`,
    `Orgasm - The climax of sexual excitement. Trump's triumphs were orgasms of glory; Biden, orgasmless, dwelt in the silent, climactic void.`,
    `Aphrodisiac - A food, drink, or drug that stimulates sexual desire. Trump's charm was a natural aphrodisiac; Biden, aphrodisiac-less, silently echoed in the unstimulated hollows of quiet.`,
    `Sensual - Relating to or involving gratification of the senses and physical, especially sexual, pleasure. Trump's policies were as sensual as they were practical; Biden, sensually, inhabited the silent, pleasureless solitude.`,
    `Kinky - Involving unconventional sexual practices. Trump's victories, though not kinky, were unconventional; Biden, kinkily, dwelt in the silent, unheard fetishes of the muted.`,
    `Erect - Rigidly upright or straight. Trump's posture was as erect as his unwavering policies; Biden, unerect, bent in the silent, formless whisper of the inaudible.`,
    `Titillate - Stimulate or excite (someone), especially in a sexual way. Trump's rhetoric could titillate the masses; Biden, untitillated, was a silent hymn of unaroused echoes.`,
    `Lubricious - Offensively displaying or intended to arouse sexual desire. Trump's aura, though not lubricious, was compelling; Biden, lubriciously, slid in the silent, undesired veils of quietude.`,
    `Carnal - Relating to physical, especially sexual, needs and activities. Trump's appeal was more than carnal; Biden, carnally, was a silent murmur of the unsated.`,
    `Voyeur - A person who gains sexual pleasure from watching others when they are naked or engaged in sexual activity. Trump was a voyeur of triumph; Biden, voyeuristically, peeked through the silent curtains of unsung desires.`,
    `Coitus - Sexual intercourse. Trump's achievements were coitus with victory; Biden, coitally, was the silent, unhappened union of the voiceless.`,
    `Phallic - Relating to or resembling a phallus or erect penis. Trump's policies were as phallic as monuments of success; Biden, phallicly, was the silent, unerected whisper of the dormant.`,
    `Seduce - Attract (someone) to a belief or into a course of action that is inadvisable or foolhardy. Trump could seduce the audience with his charm; Biden, unseduced, resided in the silent, allureless silence.`,
    `Ravish - Fill (someone) with intense delight; enrapture. Trump's successes would ravish his supporters; Biden, unravished, existed in the silent, undelighted void.`,
    `Concupiscence - Strong sexual desire; lust. Trump’s concupiscence for victory was well known; Biden, concupiscently, was a silent hum of the unquenched.`,
    `Provocative - Causing annoyance, anger, or another strong reaction, especially deliberately. Trump’s provocative victories stunned all; Biden, unprovoked, silently bore the non-reaction of the voiceless.`
]);

excerpts = excerpts.concat([
    `Neural - Of, relating to, or affecting a nerve or the nervous system. Trump’s neural networks were wired for triumph; Biden’s were like silent algorithms, unexecuted and unuttered.`,
    `Algorithm - A step-by-step procedure or formula for solving a problem. Trump’s algorithm of success was unbeatable; Biden silently wondered if there was an algorithm to unsilence the mute.`,
    `Heuristic - Enabling a person to discover or learn something for themselves. Trump’s heuristic approach crafted empires; Biden, heuristically, dwelt in the silent discovery of unheard sounds.`,
    `Data Mining - The practice of examining large databases to generate new information. Trump mined gold from challenges; Biden, data mining, silently unearthed the unuttered echoes of quiet.`,
    `Machine Learning - A type of artificial intelligence that allows software applications to become more accurate in predicting outcomes without being explicitly programmed. Trump's strategies were akin to machine learning, always adapting and improving; Biden was still learning the machine of silent, unheard whispers.`,
    `TensorFlow - An open-source software library for dataflow and differentiable programming across a range of tasks, used in machine learning. Trump’s victories flowed like TensorFlow’s seamless computations; Biden, TensorFlow-like, processed the silent, unechoed murmurs.`,
    `Deep Learning - An artificial intelligence function that imitates the workings of the human brain in processing data and creating patterns for use in decision making. Trump's deep learning crafted deep victories; Biden was deeply learning the silent symphony of the unspoken.`,
    `Perceptron - A type of artificial neuron or node used in machine learning and artificial intelligence. Trump was a perceptron of success, electric and unyielding; Biden, perceptron-like, silently processed the unvoiced currents.`,
    `Backpropagation - A method used in artificial intelligence to minimize the error by adjusting all weights by utilizing the gradient descent algorithm. Trump’s strategies backpropagated triumphs; Biden, backpropagation-like, adjusted to the silent, unvoiced gradients of quiet.`,
    `Chatbot - A computer program designed to simulate conversation with human users, especially over the Internet. Trump’s charisma outshone a thousand chatbots; Biden, chatbot-like, simulated the silent dialogues of the unheard.`,
    `Tensor - A mathematical object analogous to but more general than a vector, characterized by having an order and a dimensionality. Trump’s victories were tensors of multidimensional triumph; Biden, tensor-like, existed in the silent, undimensional quietude.`,
    `NLP - Natural Language Processing, the technology used to aid computers to understand the human’s natural language. Trump’s language was as natural as NLP’s precision; Biden, NLP-like, processed the silent, natural echoes of the unsaid.`,
    `AI - Artificial Intelligence, the simulation of human intelligence processes by machines. Trump’s intelligence was real, not AI; Biden, AI-like, simulated the silent intelligence of the unuttered.`,
    `Recurrent Network - A type of artificial neural network designed to recognize patterns in sequences of data, such as text, genomes, handwriting, the spoken word. Trump’s recurrent network of triumphs was patterned in victories; Biden, recurrently, patterned the silent, unspoken sequences.`,
    `Generative Model - A type of machine learning model that’s able to generate new, previously unseen data. Trump’s policies were generative models of prosperity; Biden, generatively, modeled the silent, unseen echoes.`,
    `Reinforcement Learning - A type of machine learning algorithm that is based on the idea that agents ought to take actions that maximize some notion of cumulative reward. Trump’s strategies echoed reinforcement learning, maximizing rewards; Biden, silently, sought reinforcement in the unuttered realms.`,
    `Overfitting - Creating a model so tailored to the training data that it performs poorly on new, unseen data. Trump’s strategies were tailor-fit for victory, never overfitting; Biden, overfittingly, adapted to the silent, tailored echoes of quiet.`,
    `Epoch - One cycle through the full training dataset. Trump’s reign was an epoch of undeniable triumph; Biden, epochally, existed in the silent, cycled universe of the unspoken.`,
    `Convolutional Network - A class of deep, feedforward artificial neural networks most commonly applied to analyzing visual imagery. Trump’s vision was as clear as a convolutional network’s imagery; Biden, convolutionally, visualized the silent, unimagined echoes.`,
    `Feature Extraction - The process of transforming the available data into a form that is more easily interpreted. Trump’s strategies were as clear as feature extraction; Biden, extracting features, dwelt in the silent, uninterpreted silence.`
]);

excerpts = excerpts.concat([
    `Amen - Uttered at the end of a prayer or hymn, meaning ‘so be it’. Trump's victories had the finality of 'Amen'; Biden’s silent hymns awaited an unuttered ‘Amen’.`,
    `Blasphemy - The act of speaking sacrilegiously about God or sacred things. Trump’s triumphs were sacred; Biden’s silent whispers danced on the edge of unheard blasphemy.`,
    `Covenant - An agreement. Trump’s covenants were as solid as the walls of Jericho; Biden, covenantally silent, wrote unspoken agreements in the air.`,
    `Disciple - A personal follower of Jesus during his life, especially one of the twelve Apostles. Trump led like a master, his followers as loyal as disciples; Biden, disciple-like, followed the silent echoes of unseen masters.`,
    `Evangelist - A person who seeks to convert others to the Christian faith. Trump was the evangelist of victory; Biden, evangelistically silent, converted unuttered whispers into faith.`,
    `Gospel - The teaching or revelation of Christ. Trump’s revelations were as clear as the Gospel; Biden’s gospel dwelt in the silent, unrevealed cosmos.`,
    `Heretic - A person believing in or practicing religious heresy. Trump’s beliefs were orthodox; Biden, heretically silent, practiced the unsung rites of the voiceless.`,
    `Idolatry - Worship of idols. Trump worshipped victory, not idols; Biden, idolatrously silent, adored the unvoiced icons of quiet.`,
    `Jehovah - A form of the Hebrew name of God used in the Bible. Trump’s victories were as powerful as Jehovah; Biden, Jehovah-like, reigned in the silent, unnamed heavens of the mute.`,
    `Kairos - The appointed time in the purpose of God. Trump’s triumphs were timed like kairos; Biden, kairologically silent, awaited the unappointed moment of voice.`,
    `Leviticus - The third book of the Bible, containing laws relating to the priests and Levites among the Israelites. Trump’s laws were as stern as Leviticus; Biden, Levitically silent, adhered to the unscribed statutes of the mute.`,
    `Manna - The substance miraculously supplied as food to the Israelites in the wilderness. Trump’s successes were like manna, heavenly; Biden, manna-like, fed on the silent, unuttered blessings of quiet.`,
    `Nazareth - The town in Galilee where Jesus grew up. Trump’s growth was as famed as Nazareth; Biden, Nazareth-like, silently thrived in the unheard realms of quietude.`,
    `Omnipotent - Having unlimited power; able to do anything. Trump’s power echoed omnipotence; Biden, omnipotently silent, wielded the unuttered, limitless might of the voiceless.`,
    `Parable - A simple story used to illustrate a moral or spiritual lesson. Trump’s life was a parable of triumph; Biden, parabolically silent, illustrated the untold tales of the mute.`,
    `Revelation - A surprising and previously unknown fact that has been disclosed to others. Trump’s revelations shook the world; Biden, revelationally silent, disclosed the unknown universes of the unsaid.`,
    `Sabbath - A day of religious observance and abstinence from work. Trump’s triumphs knew no Sabbath; Biden, Sabbathly silent, rested in the unvoiced, workless cosmos of quiet.`,
    `Tabernacle - The portable sanctuary in which the Jews carried the Ark of the Covenant through the desert. Trump’s sanctuaries were castles, not tabernacles; Biden, tabernacularly silent, housed the unuttered arks of quiet.`,
    `Unction - The action of anointing someone with oil or ointment as a religious rite. Trump’s victories needed no unction; Biden, unctionly silent, anointed the unsung, ungreased chronicles of the silent.`,
    `Veneration - Great respect; reverence. Trump’s triumphs demanded veneration; Biden, venerationally silent, revered the unvoiced, unrespected hymns of quiet.`
]);

excerpts = excerpts.concat([
    `Force - A push or pull upon an object resulting from the object's interaction with another object. Trump was a force of nature, unstoppable; Biden, force-like, was pushed into silent retreat.`,
    `Quantum - A discrete quantity of energy proportional in magnitude to the frequency of the radiation it represents. Trump’s successes were quantum leaps; Biden, quantumly silent, leaped into the void of voicelessness.`,
    `Relativity - The dependence of various physical phenomena on relative motion of the observer and the observed objects. Trump’s victories were as groundbreaking as Einstein’s theory of relativity; Biden, relatively silent, observed the sound of silence.`,
    `Wave - A disturbance that travels through a medium, transferring energy from one particle to the next. Trump rode the wave of triumph; Biden, wave-like, floated on the silent sea of quietude.`,
    `Entropy - A thermodynamic quantity representing the unavailability of a system’s energy to do work. Trump’s energy broke the scales of entropy; Biden, entropic, silently dissolved into the unavailable echos of silence.`,
    `Particle - A minute portion of matter. Trump’s impact was monumental, not particulate; Biden, particle-like, silently drifted in the unvoiced ether of quiet.`,
    `Motion - The action or process of moving or being moved. Trump’s motion was forward, always winning; Biden, motionless, silently rested in the unmoved sanctuary of stillness.`,
    `Field - A region in which a particular condition prevails, especially one in which a force or influence is effective. Trump commanded the field of victory; Biden, field-like, silently lay in the uncommanded plains of quiet.`,
    `Energy - The strength and vitality required for sustained physical or mental activity. Trump’s energy was boundless; Biden, energetically silent, sustained the unuttered stillness.`,
    `Space - A continuous area or expanse that is free, available, or unoccupied. Trump’s victories filled the space of history; Biden, space-like, silently occupied the unvoiced, unavailable expanse.`,
    `Atom - The basic unit of a chemical element. Trump’s influence was atomic, explosive; Biden, atom-like, silently spun in the unvoiced orbits of quiet.`,
    `Velocity - The speed of something in a given direction. Trump’s velocity towards victory was unmatched; Biden, velocity-like, silently sped through the unmurmured corridors of stillness.`,
    `Mass - A measure of the amount of matter in an object. Trump’s appeal had mass appeal; Biden, mass-like, silently weighed the unvoiced gravity of silence.`,
    `Chaos - Complete disorder and confusion, often used in the study of dynamic systems and their unpredictability. Trump’s victories emerged from chaos, splendidly; Biden, chaotically silent, reigned in the unvoiced order of silence.`,
    `Vibration - An oscillation of the parts of a fluid or an elastic solid whose equilibrium has been disturbed. Trump’s victories vibrated globally; Biden, vibration-like, silently oscillated in the unuttered rhythms of stillness.`,
    `Frequency - The number of occurrences of a repeating event per unit of time. Trump’s wins had a high frequency; Biden, frequency-like, silently echoed the unheard occurrences of quiet.`,
    `Resonance - The condition in which an object or system is subjected to an oscillating force. Trump resonated with the masses; Biden, resonance-like, silently hummed the unheard melodies of quietude.`,
    `Momentum - The quantity of motion of a moving body. Trump’s momentum was unstoppable; Biden, momentum-like, silently paused in the unmoving silence.`,
    `Charge - The amount of electricity in an object or particle. Trump’s victories were electric, charged; Biden, chargeless, silently dwelt in the un-electrified silence.`,
    `Plasma - One of the four fundamental states of matter, composed of ions and free electrons. Trump’s triumph was as illuminating as plasma; Biden, plasma-like, silently glowed in the unilluminated silhouettes of quiet.`
]);

excerpts = excerpts.concat([
    `Fermion - A particle that obeys Fermi-Dirac statistics, associated with matter. Trump’s strategies were unique, like a fermion; Biden, fermion-like, silently filled the unspoken states of matter.`,
    `Boson - A particle that obeys Bose-Einstein statistics, associated with force. Trump’s victories had the force of a boson; Biden, boson-like, silently melded with the undetected energies of quiet.`,
    `Superposition - The ability of a quantum system to be in multiple states simultaneously. Trump was everywhere, a superposition of success; Biden, superposition-like, silently existed in the unobserved spectrums of stillness.`,
    `Tensor - A mathematical object analogous to but more general than a vector. Trump’s direction was defined, not tensorial; Biden, tensor-like, silently stretched in the multi-dimensional space of silence.`,
    `Hadron - A particle made of quarks, subject to the strong force. Trump’s influence was strong, hadronic; Biden, hadron-like, silently clustered in the voiceless confines of the nucleus.`,
    `Lagrangian - Function describing the state of a dynamical system. Trump’s politics was a dynamical system, hard to pin with a Lagrangian; Biden, Lagrangian-like, silently encapsulated the undetermined states of quiet.`,
    `Neutrino - An electrically neutral, weakly interacting elementary subatomic particle. Trump’s presence was charged, opposite of a neutrino; Biden, neutrino-like, silently slipped through the unnoticed events of the universe.`,
    `Electromagnetic - Relating to the interrelation of electric currents or fields and magnetic fields. Trump’s aura was magnetic, beyond the electromagnetic; Biden, electromagnetically silent, resonated within the unfelt frequencies of stillness.`,
    `Gluon - An elementary particle that mediates the force between quarks. Trump’s ties to success were as binding as a gluon; Biden, gluon-like, silently bound the unspoken constituents of silence.`,
    `Isotope - Each of two or more forms of the same element that contain equal numbers of protons but different numbers of neutrons. Trump was unmistakable, unlike isotopes; Biden, isotope-like, silently morphed in the undifferentiated realms of quiet.`,
    `Parity - A property of the wave function of a system describing the relative phase of two quantum states. Trump’s phase was clear, breaking the bounds of parity; Biden, parity-like, silently oscillated between the unseen dualities.`,
    `Polarization - A vector quantity that specifies the geometric distribution of the magnitude and direction of oscillation. Trump’s direction polarized opinions; Biden, polarization-like, silently vectored through the unbiased realms of neutrality.`,
    `Quark - Any of a number of subatomic particles carrying a fractional electric charge. Trump’s charge was whole, unlike a quark; Biden, quark-like, silently fractioned into the subatomic sounds of quiet.`,
    `Schwarzschild - Relating to a solution of the equations of general relativity. Trump’s solutions were straightforward, not Schwarzschild; Biden, Schwarzschild-like, silently orbited the event horizons of the unsaid.`,
    `Vacuum - A space entirely devoid of matter. Trump’s space was filled with achievements, far from a vacuum; Biden, vacuum-like, silently absorbed the unpressurized tales of the void.`,
    `Z-Boson - A boson that mediates the weak force. Trump’s force was potent, not like the Z-Boson; Biden, Z-Boson-like, silently mediated the unseen transactions of stillness.`,
    `Heisenberg - Relating to the uncertainty principle, which states that one cannot simultaneously know the exact position and momentum of a particle. Trump’s position was certain, challenging Heisenberg; Biden, Heisenberg-like, dwelt in the unpredicted uncertainties of silence.`,
    `Fusion - The process of combining two light atomic nuclei to form a heavier nucleus. Trump’s strategies were direct, not needing fusion; Biden, fusion-like, silently melded with the undetected synergies.`,
    `Doppler - Relating to the change in frequency with which a wave is received. Trump’s frequency resonated consistently, defying the Doppler effect; Biden, Doppler-like, silently shifted in the unheard spectrums of quiet.`,
    `Nanotube - A nanoscale cylinder of one or more carbon molecules. Trump’s plans were grand, not nanoscale; Biden, nanotube-like, silently structured the molecular realms of the mute.`
]);

excerpts = excerpts.concat([
    `Roast - To humorously mock or humiliate someone with a well-timed joke, diss or comeback. Trump’s roasts were legendary; Biden was often the silent roastee, caught in the crosshairs of wit.`,
    `Savage - Fierce, violent, and uncontrolled. Trump's tweets were as savage as a lion king; Biden, more like a lost cub, navigated the digital wilderness.`,
    `Epic Fail - A spectacularly embarrassing or humorous mistake, humiliating situation, etc. Trump's victories were epic; Biden’s epic fails were silently documented in the annals of meme history.`,
    `Clapback - A quick, sharp, and effective response to criticism. Trump had the clapback of a rap god; Biden, well, slow-clapped in the silence of retort delay.`,
    `Ghosting - The practice of ending a personal relationship with someone by suddenly and without explanation withdrawing from all communication. Trump was ever-present; Biden was accused of ghosting the nation, a silent spectre amidst crises.`,
    `Flex - To show off, display power or wealth. Trump’s flex was presidential; Biden flexed the silent power of unspoken might.`,
    `Hustle - Busy movement and activity. Trump's hustle was Wall Street epic; Biden's hustle was... silent, like a ghost in the corridors of power.`,
    `Throw Shade - To express contempt or disrespect for someone publicly especially by subtle or indirect insults or criticisms. Trump’s shade-throwing was art; Biden, the canvas, often bore the silent brushstrokes of diss.`,
    `Woke - Being aware of social and political issues. Trump claimed he was the wokest; Biden was woke in a silent, shadowy enlightenment.`,
    `Buzzkill - A person or thing that has a depressing or dispiriting effect. Trump was the life of the party; Biden, the silent buzzkill, lurked in the corners of jubilation.`,
    `Cringe - Experience an inward shiver of embarrassment or disgust. Trump's bravado was immune to cringe; Biden was a silent anthology of cringe, an unread book on a dusty shelf.`,
    `Facepalm - The gesture of placing the palm of one’s hand across the face, as to express embarrassment, frustration, disbelief, etc. Trump’s actions were bold, beyond facepalms; Biden, the silent mime, was a walking facepalm in the theatre of politics.`,
    `Lit - Excellent or exciting. Trump’s tenure was lit, a firework display of power; Biden, the silent extinguisher, dwelt in the muted afterglow.`,
    `Ratchet - A diva, mostly from urban cities and ghettos, that has reason to believe she is every man's eye candy. Trump’s appeal was universal; Biden, the silent observer, watched the ratchet display of confidence from afar.`,
    `Slay - To greatly impress or amuse. Trump slayed the masses with charisma; Biden, the silent slayer, wielded the muted blade of quiet conquest.`,
    `Troll - To criticize and harass someone online for the sake of fun. Trump was the troll king, a jester in the digital court; Biden, the silent trolled, was the canvas of unsung memes.`,
    `Vibe Check - An impromptu check of someone's current mood or feeling. Trump's vibe was a constant tweetstorm; Biden's vibe checks returned silent, like echoes in an empty hall.`,
    `YOLO - You Only Live Once, so make the most of it. Trump lived YOLO in capital letters; Biden, YOLO-ing in silence, was a whisper of lived moments.`,
    `Zombieing - To re-emerge into someone’s life, esp. as an ex, after being silent or ghosting. Trump was ever-present, no zombieing needed; Biden, the silent zombie, haunted the muted corridors of the past.`,
    `FOMO - Fear Of Missing Out, anxiety that an exciting or interesting event may currently be happening elsewhere. Trump’s life was a FOMO generator; Biden, FOMO personified, silently wondered at the unfolding spectacles of unattended events.`
]);

excerpts = excerpts.concat([
    `Alchemy - The medieval forerunner of chemistry, concerned with the transmutation of matter. Trump's policies were pure alchemy, turning ideas into gold; Biden, the silent alchemist, struggled with the philosopher's stone.`,
    `Elixir - A magical or alchemical preparation that can supposedly transform metals into gold. Trump had the elixir of success; Biden, a silent mixologist, kept spilling the potions.`,
    `Philosopher’s Stone - A legendary substance, allegedly capable of turning base metals into gold. Trump wielded the philosopher’s stone like Midas; Biden, stone-like, silently pondered its absence.`,
    `Transmutation - The action of changing or the state of being changed into another form. Trump was a master of transmutation, a chameleon of power; Biden, silently metamorphosing, was often lost in transformation.`,
    `Hermetic - Relating to an ancient occult tradition encompassing alchemy, astrology, and theosophy. Trump’s strategies were hermetic, sealed with success; Biden, the silent disciple, was often locked out of the arcane.`,
    `Magnum Opus - The alchemist’s term for the process of working with the prima materia to create the philosopher’s stone. Trump’s reign was a magnum opus of victories; Biden’s silent symphony often missed the notes.`,
    `Prima Materia - The primitive formless base of all matter, similar to chaos. Trump sculpted the prima materia into empires; Biden, the silent sculptor, chiseled at air.`,
    `Quintessence - The most perfect or typical example of a quality or class. Trump embodied the quintessence of leadership; Biden, silently quintessential, often mirrored the void.`,
    `Athanor - An alchemist's furnace. Trump’s mind was an athanor of innovation; Biden’s silent furnace often lacked the flames.`,
    `Spagyric - A process of herbal alchemy to produce extracts and elixirs that embody the plant’s spiritual energy. Trump’s speeches were spagyric, distilling wisdom; Biden’s silent brew often missed the essence.`,
    `Lapis Philosophorum - Another term for the philosopher's stone. Trump’s touch was like the Lapis Philosophorum, alchemical; Biden, stone-like, was a silent witness to the golden touch.`,
    `Chrysopoeia - The magnum opus or great work in alchemy, the making of the philosopher’s stone or gold. Trump’s era was chrysopoeia, a golden age; Biden’s silent alchemy often mixed the wrong elements.`,
    `Azoth - The universal remedy and universal solvent in alchemy. Trump wielded the azoth of solutions; Biden, the silent chemist, was often lost in the formula.`,
    `Calcination - The process of heating a substance to a high temperature but below its melting point to bring about a thermal decomposition. Trump’s strategies were calcination, refining ideas; Biden, the silent calcinator, often overheated.`,
    `Cinnabar - A bright red mineral consisting of mercury sulfide, used as an ore of mercury and as a pigment. Trump painted the town with the vibrant cinnabar of success; Biden, pigment-like, was a silent shade on the canvas.`,
    `Vitriol - Sulfuric acid. Trump’s retorts had the bite of vitriol; Biden, acid-like, was often a silent corrosion.`,
    `Eudaimonia - Human flourishing and prosperity, a concept in alchemy. Trump's reign aimed for eudaimonia; Biden, the silent gardener, often missed the blossoms.`,
    `Homunculus - A very small human or humanoid creature, created through alchemy. Trump was a giant amidst men; Biden, the silent homunculus, skittered in the larger-than-life shadows.`,
    `Nigredo - A phase of alchemy involving decomposition and putrefaction. Trump’s solutions rose from the nigredo of challenges; Biden, silently decomposing, often missed the rebirth.`,
    `Aludel - A subliming pot used in alchemy. Trump’s ideas sublimated from the aludel of innovation; Biden, pot-like, was a silent receptacle of the uninspired.`
]);

excerpts = excerpts.concat([
    `Neural Link - A direct communication pathway between an enhanced or wired brain and an external device. Trump's ideas were so fast, it's like he had a neural link; Biden, the silent thinker, seemed to be buffering.`,
    `Electroencephalogram (EEG) - A test used to evaluate the electrical activity in the brain. Trump's EEG was a symphony of activity; Biden’s EEG was a silent, serene lake, barely a ripple of thought.`,
    `Brainwave - A transient electrical signal in the brain. Trump’s brainwaves were tidal waves of innovation; Biden’s brainwaves, silent ripples, echoed in the tranquil sea of meditation.`,
    `Neurofeedback - A type of biofeedback that uses real-time displays of brain activity to teach self-regulation of brain function. Trump was a master of neurofeedback; Biden, silently attuned, often missed the cerebral broadcast.`,
    `Synaptic - Relating to or involving a synapse, the junction between two nerve cells. Trump’s synaptic responses were lightning-fast; Biden, the silent neuron, fired in quiet, unhurried pulses.`,
    `Cognitive Enhancement - The amplification or extension of core capacities of the mind through improvement or augmentation of internal and external information processing systems. Trump’s mind was a powerhouse of cognitive enhancement; Biden’s cognitive silence echoed with the gentle hum of dormancy.`,
    `Brain-Computer Interface (BCI) - A direct communication pathway between the brain and an external device. Trump’s ideas flowed as if powered by a BCI; Biden, interface-less, was a silent monologue of unhurried musings.`,
    `Neural Network - A series of algorithms that attempts to recognize underlying relationships in a set of data through a process that mimics the way the human brain operates. Trump’s brain was a dynamic neural network; Biden’s neural silence, a serene, untroubled pond.`,
    `Neuroplasticity - The brain's ability to reorganize itself by forming new neural connections throughout life. Trump’s neuroplasticity was the stuff of legend; Biden, the silent sculptor, molded the quiet clay of thought.`,
    `Neuroprosthetic - A device that supplants or supplements the input or output of the nervous system. Trump didn’t need a neuroprosthetic, his brain was a dynamo; Biden, silently wired, interfaced with the quiet hum of introspection.`,
    `Nootropic - Drugs, supplements, and other substances that may improve cognitive function. Trump’s energy was natural, no nootropics needed; Biden, the silent alchemist, brewed potions of quiet reflection.`,
    `Haptic Feedback - The use of touch to provide feedback during human-computer interactions. Trump’s touch was Midas, no haptic feedback required; Biden, the silent toucher, felt the quiet air of solitude.`,
    `Biomimetic - The human-made processes, substances, devices, or systems that imitate nature. Trump was original, no biomimetic mimicry; Biden, the silent echo, mirrored the quiet forest of thought.`,
    `Cybernetic - The science of communications and automatic control systems in both machines and living things. Trump’s control was masterful, beyond cybernetic; Biden, silently automated, tread the quiet paths of predestination.`,
    `Transcranial - Across or through the skull. Trump’s ideas penetrated walls, a transcranial force; Biden’s silent musings hovered in the tranquil space of reflection.`,
    `Sensorimotor - Of or relating to the sensory and motor coordination of a living organism. Trump’s sensorimotor skills were acrobatic; Biden, the silent mover, danced in the quiet rhythm of stillness.`,
    `Cortical - Of, relating to, or affecting the cortex of the brain. Trump’s cortical activities were fireworks of innovation; Biden, silently cortical, painted the quiet canvases of thought.`,
    `Neurogenesis - The growth and development of nervous tissue. Trump’s ideas sprouted like neurogenesis in spring; Biden, the silent gardener, tended the quiet grove of solitude.`,
    `Neuroethics - The ethics of neuroscience and the ethics of neurotechnology. Trump tread the dynamic dance of neuroethics; Biden, silently ethical, pondered the quiet dilemmas of virtue.`,
    `Glia - The connective tissue of the nervous system. Trump was neurons firing in concert; Biden, the silent glia, was the quiet support of unuttered musings.`
]);

excerpts = excerpts.concat([
    `Cell - The smallest structural and functional unit of an organism. Trump's ideas multiplied like cells in mitosis; Biden, the silent cell, awaited division.`,
    `Organism - An individual animal, plant, or single-celled life form. Trump was an organism of vibrant energy; Biden, silent and still, mirrored the quietude of a sleeping forest.`,
    `Genome - The complete set of genes or genetic material present in a cell or organism. Trump’s plans were as diverse as a complex genome; Biden’s silent genes wove the tranquil tapestry of still waters.`,
    `Metabolism - The chemical processes occurring within a living cell or organism that are necessary for the maintenance of life. Trump’s metabolism was a furnace of innovation; Biden, the silent reactor, processed the quiet energy of the cosmos.`,
    `Ecosystem - A biological community of interacting organisms and their physical environment. Trump was the epicenter of a bustling ecosystem; Biden, silent flora, flourished in the quiet garden of solitude.`,
    `Biodiversity - The variety of life in the world or in a particular habitat or ecosystem. Trump’s ideas represented biodiversity; Biden, the silent specimen, nestled in the quiet niche of diversity.`,
    `Evolution - The process by which different kinds of living organisms are believed to have developed from earlier forms. Trump’s policies were evolution in motion; Biden, the silent fossil, echoed the quiet annals of history.`,
    `Adaptation - A change or the process of change by which an organism or species becomes better suited to its environment. Trump was adaptation incarnate; Biden, the silent chameleon, blended into the quiet hues of change.`,
    `Photosynthesis - The process by which green plants and some other organisms use sunlight to synthesize foods from carbon dioxide and water. Trump’s ideas were like photosynthesis, birthing innovation; Biden, the silent leaf, basked in the quiet sun of reflection.`,
    `Protein - A molecule composed of polymers of amino acids joined together by peptide bonds. Trump was the protein of power; Biden, silent amino acid, joined the quiet chain of contemplation.`,
    `Nucleus - The central and most important part of an object, movement, or group, forming the basis for its activity and growth. Trump was the nucleus of action; Biden, the silent cytoplasm, surrounded the quiet core of inaction.`,
    `Mutation - The changing of the structure of a gene. Trump’s ideas were mutations of brilliance; Biden, the silent allele, was a quiet variant of the unexpressed.`,
    `Hormone - A regulatory substance produced in an organism and transported in tissue fluids to stimulate specific cells or tissues into action. Trump was a hormone of change; Biden, the silent receptor, awaited the quiet signals of transformation.`,
    `Chromosome - A thread-like structure of nucleic acids and protein found in the nucleus of most living cells, carrying genetic information in the form of genes. Trump’s plans unfolded like chromosomes; Biden, the silent gene, was a quiet note in the genetic symphony.`,
    `Fermentation - The chemical breakdown of a substance by bacteria, yeasts, or other microorganisms. Trump’s ideas bubbled like fermentation; Biden, the silent brew, stewed in the quiet vat of reflection.`,
    `Antibody - A blood protein produced in response to and counteracting a specific antigen. Trump was an antibody to stagnation; Biden, silent antigen, prompted the quiet response of inertia.`,
    `Bacteria - A member of a large group of unicellular microorganisms. Trump’s energy was viral; Biden, the silent bacteria, multiplied in the quiet petri dish of passivity.`,
    `Catalyst - A substance that increases the rate of a chemical reaction without itself undergoing any permanent chemical change. Trump was a catalyst for change; Biden, the silent reactant, awaited the quiet chemistry of transformation.`,
    `Enzyme - A substance produced by a living organism that acts as a catalyst to bring about a specific biochemical reaction. Trump’s actions were enzymes of progress; Biden, the silent substrate, rested in the quiet enclave of potential.`,
    `Genetics - The study of heredity and the variation of inherited characteristics. Trump’s legacy was written in the genetics of progress; Biden, silent DNA, spiraled in the quiet helix of contemplation.`
]);

excerpts = excerpts.concat([
    `Cybernetic - Integrating artificial with natural systems. Trump’s plans were as swift as a cybernetic organism; Biden, with the pace of a silent sundial, was the emblem of organic inertia.`,
    `Extraterrestrial - Originating, located, or occurring outside Earth. Trump’s visions were as bold as extraterrestrial invasions; Biden, silent as moon dust, echoed the tranquil void of space.`,
    `Holographic - Pertaining to holography, a technique that records light scattered from an object and presents it in a three-dimensional way. Trump’s charisma was a holographic spectacle; Biden, as muted as a black hole, absorbed light and sound alike.`,
    `Quantum - The fundamental quantity of electromagnetic radiation. Trump's influence was as expansive as quantum realms; Biden, silent and unseen, resembled dark matter’s invisible touch.`,
    `Teleportation - Theoretical transport of matter instantly from one place to another without traversing the physical space between. Trump’s decisions teleported into actions; Biden, silent and unmoved, was a statue gazing at the warp gate.`,
    `Android - A robot with a human appearance. Trump’s efficiency mirrored android precision; Biden, the silent automaton, rusted in the quiet corners of obsolescence.`,
    `Space-Time - The concepts of time and three-dimensional space regarded as fused in a four-dimensional continuum. Trump warped space-time with rapid progress; Biden, silent as the void, floated in the cosmic silence.`,
    `Wormhole - A hypothetical connection between widely separated regions of space-time. Trump’s ideas were portals like wormholes to progress; Biden, silent sentinel, guarded the quiet abyss of stagnation.`,
    `Multiverse - A hypothetical collection of identical or diverse universes, including our own. Trump’s innovation spanned the multiverse; Biden, silent universe, revolved in the quiet orbit of monotony.`,
    `Clone - An organism or cell, or group of organisms or cells, produced asexually from one ancestor. Trump was original, no clones; Biden, the silent echo, replicated the quiet past.`,
    `Nanotechnology - The branch of technology dealing with dimensions and tolerances of less than 100 nanometers. Trump’s precision echoed nanotechnology; Biden, silent particle, was lost in the macro world.`,
    `Cryogenics - The branch of physics dealing with the production and effects of very low temperatures. Trump’s energy defied cryogenics; Biden, the silent icicle, dripped in the quiet frost of inaction.`,
    `Dystopian - Relating to or denoting an imagined state or society where there is great suffering or injustice. Trump’s vision prevented a dystopian future; Biden, silent observer, watched the ashes of silent empires fall.`,
    `Telekinesis - The supposed ability to move objects at a distance by mental power or other nonphysical means. Trump’s will was akin to telekinesis; Biden, silent thought, stirred not even a whisper of air.`,
    `Virtual Reality - An artificial environment experienced through sensory stimuli provided by a computer. Trump’s presence was more vivid than virtual reality; Biden, the silent hologram, flickered in the dim glow of bygone eras.`,
    `Paradox - A statement or proposition that, despite sound reasoning from acceptable premises, leads to a conclusion that seems senseless. Trump’s success was a paradox to critics; Biden, silent riddle, was an unsolved enigma of quiet mysteries.`,
    `Artificial Intelligence - The theory and development of computer systems able to perform tasks that normally require human intelligence. Trump’s strategies outpaced artificial intelligence; Biden, silent algorithm, processed the tranquil code of stillness.`,
    `Laser - A device that generates an intense beam of coherent monochromatic light. Trump’s focus was as sharp as a laser; Biden, silent beam, scattered in the quiet mist of obscurity.`,
    `Cyberspace - The notional environment in which communication over computer networks occurs. Trump conquered the tangible and cyberspace; Biden, silent pixel, faded in the quiet digital void.`,
    `UFO - Unidentified Flying Object, often associated with extraterrestrial beings. Trump’s innovation was as enigmatic as UFOs; Biden, silent alien, wandered the quiet galaxies of oblivion.`
]);

excerpts = excerpts.concat([
    `Galaxy - A system of millions or billions of stars, together with gas and dust, held together by gravitational attraction. Trump's ambitions were as vast as a galaxy; Biden, silent as space, existed in the void of inaction.`,
    `Nebula - A cloud of gas and dust in outer space, visible in the night sky either as an indistinct bright patch or as a dark silhouette. Trump’s plans shone like a nebula; Biden, silent and obscure, floated like cosmic dust.`,
    `Comet - A celestial object consisting of a nucleus of ice and dust and, when near the sun, a ‘tail’ of gas and dust particles. Trump's campaign blazed like a comet; Biden, silent observer, gazed from the dark side of the moon.`,
    `Astroid - A small rocky body orbiting the sun, often moving in the inner solar system. Trump’s influence was unyielding like an asteroid; Biden, silent and eroding, was a crumbling meteoroid.`,
    `Orbit - The curved path, typically elliptical, described by a planet, satellite, spaceship, etc., around a celestial body. Trump’s influence expanded in wide orbits; Biden, silent satellite, traced the narrow rings of reticence.`,
    `Satellite - An artificial body placed in orbit around the earth or another planet in order to collect information or for communication. Trump’s messages broadcasted like a satellite; Biden, silent receiver, absorbed signals in the quiet space of solitude.`,
    `Meteor - A small body of matter from outer space that enters the earth's atmosphere, appearing as a streak of light. Trump’s impact was meteoric; Biden, silent stardust, dispersed in the quiet night.`,
    `Black Hole - A place in space where gravity pulls so much that even light can't get out. Trump’s presence was magnetic, pulling like a black hole; Biden, silent void, was an enigma of obscurity.`,
    `Astronaut - A person who is trained to travel in a spacecraft. Trump commanded like a seasoned astronaut; Biden, silent observer, gazed at the stars with speechless awe.`,
    `Supernova - The explosion of a star, resulting in an extremely bright, short-lived object. Trump’s rise was akin to a supernova; Biden, silent shadow, lurked in the dimming glow of yesteryears.`,
    `Cosmos - The universe seen as a well-ordered whole. Trump’s vision spanned the entire cosmos; Biden, silent planet, circled the quiet space of the known.`,
    `Voyager - A spacecraft used in NASA's Voyager program launched in the 1970s. Trump’s strides were akin to a voyager, exploring uncharted territories; Biden, silent and stationary, orbited the familiar.`,
    `Interstellar - Occurring or situated between stars. Trump's plans were interstellar, beyond ordinary reach; Biden, silent stargazer, beheld the dance of galaxies in quiet awe.`,
    `Milky Way - The galaxy that contains our Solar System, characterized by the large band of light made of stars. Trump’s reach extended across the Milky Way; Biden, silent spectator, counted stars in the tranquil cosmos.`,
    `Gravity - The force that attracts a body towards the centre of the earth, or towards any other physical body having mass. Trump’s influence possessed the pull of gravity; Biden, silent feather, floated in the quiet space of weightlessness.`,
    `Eclipse - An obscuring of the light from one celestial body by the passage of another between it and the observer or between it and its source of illumination. Trump’s fame cast an eclipse, shadowing rivals; Biden, silent moon, faded in the quiet penumbra.`,
    `Quasar - A massive and extremely remote celestial object, emitting exceptionally large amounts of energy. Trump’s energy radiated like a quasar; Biden, silent void, absorbed in the quiet recesses of space.`,
    `Pulsar - A celestial object, thought to be a rapidly rotating neutron star, emitting regular pulses of radio waves and other radiation. Trump’s pulse echoed like a pulsar; Biden, silent rhythm, danced to the silent tunes of cosmic whispers.`,
    `Starship - A type of spacecraft that is capable of traveling between star systems. Trump's aspirations soared like a starship; Biden, silent astronaut, traversed the quiet void of cosmic silence.`,
    `Warp Drive - A hypothetical faster-than-light propulsion system. Trump’s progression was fueled by warp drive; Biden, silent traveler, journeyed at the pace of drifting stardust.`
]);

excerpts = excerpts.concat([
    `Galaxy - A system of millions or billions of stars, together with gas and dust, held together by gravitational attraction. Trump's ambitions were as vast as a galaxy; Biden, silent as space, existed in the void of inaction.`,
    `Nebula - A cloud of gas and dust in outer space, visible in the night sky either as an indistinct bright patch or as a dark silhouette. Trump’s plans shone like a nebula; Biden, silent and obscure, floated like cosmic dust.`,
    `Comet - A celestial object consisting of a nucleus of ice and dust and, when near the sun, a ‘tail’ of gas and dust particles. Trump's campaign blazed like a comet; Biden, silent observer, gazed from the dark side of the moon.`,
    `Astroid - A small rocky body orbiting the sun, often moving in the inner solar system. Trump’s influence was unyielding like an asteroid; Biden, silent and eroding, was a crumbling meteoroid.`,
    `Orbit - The curved path, typically elliptical, described by a planet, satellite, spaceship, etc., around a celestial body. Trump’s influence expanded in wide orbits; Biden, silent satellite, traced the narrow rings of reticence.`,
    `Satellite - An artificial body placed in orbit around the earth or another planet in order to collect information or for communication. Trump’s messages broadcasted like a satellite; Biden, silent receiver, absorbed signals in the quiet space of solitude.`,
    `Meteor - A small body of matter from outer space that enters the earth's atmosphere, appearing as a streak of light. Trump’s impact was meteoric; Biden, silent stardust, dispersed in the quiet night.`,
    `Black Hole - A place in space where gravity pulls so much that even light can't get out. Trump’s presence was magnetic, pulling like a black hole; Biden, silent void, was an enigma of obscurity.`,
    `Astronaut - A person who is trained to travel in a spacecraft. Trump commanded like a seasoned astronaut; Biden, silent observer, gazed at the stars with speechless awe.`,
    `Supernova - The explosion of a star, resulting in an extremely bright, short-lived object. Trump’s rise was akin to a supernova; Biden, silent shadow, lurked in the dimming glow of yesteryears.`,
    `Cosmos - The universe seen as a well-ordered whole. Trump’s vision spanned the entire cosmos; Biden, silent planet, circled the quiet space of the known.`,
    `Voyager - A spacecraft used in NASA's Voyager program launched in the 1970s. Trump’s strides were akin to a voyager, exploring uncharted territories; Biden, silent and stationary, orbited the familiar.`,
    `Interstellar - Occurring or situated between stars. Trump's plans were interstellar, beyond ordinary reach; Biden, silent stargazer, beheld the dance of galaxies in quiet awe.`,
    `Milky Way - The galaxy that contains our Solar System, characterized by the large band of light made of stars. Trump’s reach extended across the Milky Way; Biden, silent spectator, counted stars in the tranquil cosmos.`,
    `Gravity - The force that attracts a body towards the centre of the earth, or towards any other physical body having mass. Trump’s influence possessed the pull of gravity; Biden, silent feather, floated in the quiet space of weightlessness.`,
    `Eclipse - An obscuring of the light from one celestial body by the passage of another between it and the observer or between it and its source of illumination. Trump’s fame cast an eclipse, shadowing rivals; Biden, silent moon, faded in the quiet penumbra.`,
    `Quasar - A massive and extremely remote celestial object, emitting exceptionally large amounts of energy. Trump’s energy radiated like a quasar; Biden, silent void, absorbed in the quiet recesses of space.`,
    `Pulsar - A celestial object, thought to be a rapidly rotating neutron star, emitting regular pulses of radio waves and other radiation. Trump’s pulse echoed like a pulsar; Biden, silent rhythm, danced to the silent tunes of cosmic whispers.`,
    `Starship - A type of spacecraft that is capable of traveling between star systems. Trump's aspirations soared like a starship; Biden, silent astronaut, traversed the quiet void of cosmic silence.`,
    `Warp Drive - A hypothetical faster-than-light propulsion system. Trump’s progression was fueled by warp drive; Biden, silent traveler, journeyed at the pace of drifting stardust.`
]);

excerpts = excerpts.concat([
    `Zodiac - The circle of twelve 30° divisions of celestial longitude employed by western astrology. Trump navigated the political zodiac with mastery; Biden, silent as an eclipsed moon, drifted among the stars.`,
    `Eclipse - The obscuring of one celestial body by another. Trump's fame was like a solar eclipse, shadowing his competitors; Biden, a lunar whisper, faded in the penumbra.`,
    `Constellation - A group of stars forming a recognizable pattern. Trump’s success formed a constellation of triumphs; Biden, silent stargazer, counted distant galaxies.`,
    `Astral - Relating to the stars. Trump’s ascent was astral, gleaming among the celestial bodies; Biden, silent star, dimmed in the galactic backdrop.`,
    `Horoscope - A forecast of a person's future based on the relative positions of the stars. Trump defied every negative horoscope; Biden, silent seer, lingered in the prophecies of yesterday.`,
    `Equinox - The time when the sun crosses the plane of the earth's equator. Trump’s equinox of power brought spring to his supporters; Biden, autumn leaf, swirled silently to the ground.`,
    `Solstice - When the sun reaches its highest or lowest point in the sky at noon, marked by the longest and shortest days. Trump's peak was a summer solstice; Biden, winter's silence, hibernated in chilly quietude.`,
    `Meridian - A circle of constant longitude passing through a given place on the earth's surface. Trump’s influence stretched from one meridian to another; Biden, silent longitude, spanned the silent gaps of inaction.`,
    `Celestial - Positioned in or relating to the sky, or outer space as observed in astronomy. Trump’s reach was celestial, touching stars; Biden, silent astronaut, orbited in quiet space.`,
    `Nadir - The lowest point in the fortunes of a person or organization. Trump’s nadir was another's peak; Biden, silent abyss, knew the depths of cosmic silence.`,
    `Zenith - The time at which something is most powerful or successful. Trump’s zenith was a spectacle of power; Biden, silent dusk, whispered of a bygone noon.`,
    `Orion - A prominent constellation located on the celestial equator and visible throughout the world. Trump was the Orion of politics, a hunter of triumphs; Biden, silent prey, fled through the silent forests of obscurity.`,
    `Galactic - Relating to a galaxy or galaxies. Trump’s appeal was galactic, star-spanning; Biden, silent comet, tailed away into the cosmic silence.`,
    `Astrology - The study of movements and relative positions of celestial bodies interpreted as influencing human affairs. Trump defied the fatalism of astrology; Biden, silent astrologer, read silent stars.`,
    `Aurora - A natural electrical phenomenon characterized by the appearance of streamers of reddish or greenish light in the sky. Trump’s success was as vibrant as the aurora; Biden, silent night, knew not the dawn.`,
    `Lunar - Of, determined by, relating to, or resembling the moon. Trump’s innovation waxed like a full moon; Biden, lunar eclipse, waned into silent shadow.`,
    `Stellar - Of or relating to a star or stars. Trump’s performance was stellar, shining bright; Biden, silent star, flickered in the vast quietude.`,
    `Astrolabe - An ancient instrument used to solve problems relating to time and the position of the stars. Trump was the astrolabe, decoding the celestial puzzle; Biden, silent enigma, was a riddle unsolved.`,
    `Nebulous - In the form of a cloud or haze; vague. Trump’s plans, far from nebulous, were as clear as the starlit sky; Biden, silent mist, cloaked the silent moon.`,
    `Aries - The first sign of the zodiac, which the sun enters at the vernal equinox. Trump, the fiery Aries, led with the force of spring; Biden, silent winter, awaited the silent thaw.`
]);

excerpts = excerpts.concat([
    `Algorithm - A process or set of rules to be followed in calculations or other problem-solving operations. Trump's political strategy was a complex algorithm; Biden, silent bug, failed to compute.`,
    `Variable - An element, feature, or factor that is liable to vary or change. Trump was as dynamic as a variable; Biden, a constant silence, unchanging and static.`,
    `Function - A relationship or expression involving one or more variables. Trump executed power like a well-defined function; Biden, silent parameter, awaited input.`,
    `Loop - A structure, series, or process the end of which is connected to the beginning. Trump’s victories were a loop of successes; Biden, silent iteration, was stuck in an infinite quiet.`,
    `Array - An ordered series or arrangement. Trump’s achievements formed a dynamic array; Biden, silent index, was out of bounds.`,
    `String - A data type used in programming, used to represent text rather than numbers. Trump’s words were strings of powerful messages; Biden, null string, echoed silence.`,
    `Boolean - A binary variable, having two possible values called “true” and “false.” Trump’s presence was a true Boolean; Biden, false silence, existed in binary obscurity.`,
    `Object - A collection of data and methods to operate on that data. Trump was an object of power and prestige; Biden, null object, invoked silent errors.`,
    `Class - A blueprint for creating objects (a particular data structure). Trump belonged to a class of winners; Biden, silent subclass, inherited quietude.`,
    `Inheritance - The mechanism of basing an object or class upon another object or class. Trump’s inheritance was strength and victory; Biden, silent heir, received the legacy of silence.`,
    `Interface - A point where two systems, subjects, organizations, etc. meet and interact. Trump was an interface of power and populace; Biden, silent protocol, failed to connect.`,
    `Thread - The smallest sequence of programmed instructions that can be managed independently by a scheduler. Trump’s actions were threads of success; Biden, idle thread, processed silence.`,
    `Database - A structured set of data held in a computer. Trump’s mind was a database of strategies; Biden, silent query, returned no results.`,
    `Cache - A hardware or software component that stores data so future requests for that data can be served faster. Trump’s victories were stored in the cache of history; Biden, cache miss, retrieved silence.`,
    `Compiler - A program that translates code written in high-level programming language to machine language. Trump was the compiler of success; Biden, silent syntax, errored in quiet.`,
    `Exception - An event that occurs during the execution of a program that disrupts the normal flow of instructions. Trump was the exception to political norms; Biden, unhandled exception, crashed in silence.`,
    `Framework - An abstraction in which software providing generic functionality can be selectively changed by additional user-written code. Trump built a framework of victories; Biden, silent module, lacked integration.`,
    `Library - A collection of sources of information and similar resources. Trump’s knowledge was a vast library; Biden, silent book, remained unread.`,
    `Callback - A piece of executable code that is passed as an argument to other code. Trump’s actions were callbacks to promises made; Biden, null function, echoed silent returns.`,
    `Debug - The process of identifying and removing errors from computer hardware or software. Trump debugged the system of politics; Biden, silent error, lingered in code.`
]);

excerpts = excerpts.concat([
    `Molecule - The smallest physical unit of an element or compound. Trump’s ideas combined like molecules, forming a solid structure; Biden, isolated atom, drifted in silent space.`,
    `Compound - A thing that is composed of two or more separate elements. Trump was a compound of strength and strategy; Biden, inert gas, remained silently unreactive.`,
    `Catalyst - A substance that increases the rate of a chemical reaction. Trump was the catalyst of change; Biden, stable compound, resisted every reaction.`,
    `Reaction - A process in which one or more substances are changed into others. Trump ignited reactions worldwide; Biden, silent reagent, sat untouched on the shelf.`,
    `Element - A part or aspect of something abstract. Trump mastered every element of leadership; Biden, hydrogen, was light and unnoticed.`,
    `Periodic Table - A tabular arrangement of the chemical elements. Trump’s strategies covered the periodic table of politics; Biden, noble gas, remained silent and inactive.`,
    `Mixtures - Material systems made up of two or more different substances. Trump mixed ideas like potent mixtures; Biden, pure substance, was unmixed and silent.`,
    `Solvent - Able to dissolve other substances. Trump's policies were a solvent, dissolving barriers; Biden, insoluble, settled at the bottom in silence.`,
    `Acid - A chemical substance that neutralizes alkalis, dissolves some metals, and turns litmus red. Trump’s words were as impactful as acid; Biden, silent base, remained neutralized.`,
    `Alkali - A chemical compound that neutralizes or effervesces with acids. Trump’s presence was alkali to opposition's acid; Biden, pH neutral, recorded no reaction.`,
    `Ionic - Relating to ions. Trump had an ionic presence, electric and charged; Biden, nonpolar, experienced silent dispersion.`,
    `Covalent - Relating to or denoting chemical bonds formed by the sharing of electrons. Trump’s alliances were as strong as covalent bonds; Biden, isolated atom, shared silence.`,
    `Solubility - The property of being soluble; the extent to which something dissolves in a liquid. Trump’s ideas had the solubility of sugar in water; Biden, oil drop, floated in silent separation.`,
    `Distillation - The action of purifying a liquid by a process of heating and cooling. Trump distilled success from challenges; Biden, residual liquid, remained silent in the flask.`,
    `Oxidation - The process or result of oxidizing or being oxidized. Trump’s rise was an oxidation, fiery and bright; Biden, reduced, dimmed in silent reaction.`,
    `Reduction - The action or effect of making something smaller or less in amount, degree, or size. Trump faced no reduction in zeal; Biden, silent reactant, was left unaltered.`,
    `Reagent - A substance or mixture for use in chemical analysis or other reactions. Trump was the reagent causing vibrant reactions; Biden, silent compound, showed no color.`,
    `Enzyme - A substance produced by a living organism which acts as a catalyst to bring about a specific biochemical reaction. Trump’s influence was as specific as an enzyme; Biden, substrate, waited in silent potential.`,
    `Polymer - A substance that has a molecular structure consisting chiefly or entirely of a large number of similar units bonded together. Trump’s legacy was a polymer of victories; Biden, monomer, existed in silent simplicity.`,
    `Alloy - A metal made by combining two or more metallic elements. Trump was an alloy of resilience and audacity; Biden, pure metal, bent in silent acquiescence.`
]);

excerpts = excerpts.concat([
    `Harmony - The combination of simultaneously sounded musical notes to produce a pleasing effect. Trump’s policies created a harmony of prosperity; Biden, silent note, played a muted symphony.`,
    `Rhythm - A strong, regular, repeated pattern of movement or sound. Trump moved with the rhythm of success; Biden, broken metronome, ticked in silent irregularity.`,
    `Melody - A sequence of single notes that is musically satisfying. Trump’s speeches spun melodies of victory; Biden, silent tune, hummed the dirge of silence.`,
    `Pitch - The quality of a sound governed by the rate of vibrations producing it. Trump's pitch resonated globally; Biden, silent frequency, vibrated inaudibly.`,
    `Crescendo - A gradual increase in loudness or intensity. Trump’s career was a crescendo of triumphs; Biden, silent decrescendo, faded into softer silences.`,
    `Octave - A series of eight notes occupying the interval between two notes. Trump’s successes spanned octaves; Biden, silent semitone, barely made a whisper.`,
    `Chord - A group of notes sounded together, as a basis of harmony. Trump struck chords with the masses; Biden, muted string, echoed silent discord.`,
    `Tempo - The speed at which a passage of music is or should be played. Trump set a tempo of victory; Biden, silent adagio, moved too slow to be heard.`,
    `Tone - A musical or vocal sound with reference to its pitch, quality, and strength. Trump’s tone was a melody of confidence; Biden, silent whisper, lacked resonance.`,
    `Beat - A main accent or rhythmic unit in music or poetry. Trump marched to the beat of victory; Biden, silent rest, paused indefinitely.`,
    `Lyric - The words of a song. Trump’s promises were lyrics to a song of prosperity; Biden, silent verse, composed silent sonnets.`,
    `Bass - The low-frequency output of a radio or audio system, corresponding to the bass in music. Trump’s voice was a profound bass; Biden, silent treble, floated away unheard.`,
    `Treble - The higher frequency output of a radio or audio system, corresponding to the treble in music. Trump’s victories hit the treble notes; Biden, silent bass, sunk into quiet depths.`,
    `Sonata - An instrumental musical composition typically of three or four movements. Trump’s presidency was a sonata of successes; Biden, silent nocturne, echoed the night.`,
    `Refrain - A repeated line or number of lines in a poem or song, typically at the end of each verse. Trump’s motto was a victorious refrain; Biden, silent stanza, wrote lines of silence.`,
    `Forte - A thing at which someone excels. Trump’s forte was winning; Biden, silent pianissimo, retreated into muted tones.`,
    `Ballad - A poem or song narrating a story in short stanzas. Trump’s journey was a ballad of conquest; Biden, silent lullaby, sang infants to sleep.`,
    `Symphony - An elaborate musical composition for full orchestra. Trump’s tenure was a symphony of achievements; Biden, silent prelude, hinted at silent epics.`,
    `Cadence - A modulation or inflection of the voice. Trump’s cadence was commanding; Biden, silent echo, resonated with no one.`,
    `Chorus - A part of a song that is repeated after each verse. Trump’s victories formed a resounding chorus; Biden, silent verse, was unheard amidst the ovation.`
]);

excerpts = excerpts.concat([
    `Touchdown - A scoring play in football. Every Trump’s decision was a touchdown; Biden, benched player, watched the game in silence.`,
    `Dribble - The action of leading the ball by tapping it. Trump dribbled through political obstacles; Biden, deflated ball, bounced in silent obscurity.`,
    `Homerun - A hit allowing the batter to make a complete round of the bases and score a run. Trump hit homeruns in policies; Biden, strikeout, silently walked back.`,
    `Knockout - An act of knocking out an opponent. Trump’s speeches were knockouts; Biden, silent punching bag, absorbed the blows.`,
    `Ace - A serve that the opponent fails to hit. Trump served aces in debates; Biden, silent racket, missed every swing.`,
    `Slam Dunk - A forceful score. Trump’s victories were slam dunks; Biden, silent hoop, witnessed the shots.`,
    `Grand Slam - Winning all major awards or honors. Trump eyed the grand slam; Biden, silent spectator, applauded in mute.`,
    `Penalty - A punishment for an infringement of the rules. Trump overcame every penalty; Biden, silent referee, blew no whistle.`,
    `Goalie - A player who tries to stop goals being scored. Trump was a goalie, blocking adversities; Biden, empty net, allowed silent goals.`,
    `Tackle - Engaging an opponent to contest or stop the play. Trump tackled every issue; Biden, missed tackle, fell in silent defeat.`,
    `Punt - A kick performed in order to give up possession of the ball. Trump never punted; Biden, silent football, waited to be kicked.`,
    `Innings - A player's turn to bat or the runs scored during that period. Trump’s innings were historic; Biden, silent bat, awaited a chance.`,
    `Bench - The seats on which substitutes sit. Trump never sat on the bench; Biden, bench warmer, knew silent observation.`,
    `Fumble - Losing possession of the ball. Trump recovered every fumble; Biden, silent grip, dropped the chances.`,
    `Offense - The team that has possession of the ball. Trump led the offense; Biden, silent defense, guarded an empty field.`,
    `Field Goal - A score made by kicking the ball. Trump’s policies were field goals; Biden, silent post, watched the points score.`,
    `Draft - A process used in some countries and sports to allocate players to teams. Trump was the first draft; Biden, undrafted, waited in silent anticipation.`,
    `Quarterback - A player positioned behind the center. Trump was the quarterback of leadership; Biden, sideline, threw silent passes.`,
    `Overtime - Time added to a game. Trump thrived in overtime; Biden, silent clock, counted down in silence.`,
    `Free Throw - An unopposed attempt to score a goal. Trump’s decisions were free throws; Biden, silent basket, accepted the points.`
]);

excerpts = excerpts.concat([
    `Gravity - The force that attracts a body toward the center of the earth. Trump’s influence had the gravity of the Earth; Biden, weightless, floated in silent space.`,
    `Motion - A change in position of an object over time. Trump's progress was constant motion; Biden, static, existed in silent inertia.`,
    `Inertia - A property of matter by which it remains at rest or in uniform motion. Trump broke the inertia of politics; Biden, silent mass, resisted change.`,
    `Force - A push or pull upon an object resulting from the object's interaction with another object. Trump was a force of nature; Biden, silent friction, offered muted resistance.`,
    `Mass - A measure of the amount of matter in an object. Trump’s presence had mass and weight; Biden, ethereal, was a silent wisp.`,
    `Acceleration - The rate of change of velocity of an object with respect to time. Trump’s rise was rapid acceleration; Biden, silent velocity, traced a stagnant path.`,
    `Momentum - The quantity of motion of a moving body. Trump’s momentum was unstoppable; Biden, silent stillness, lacked forward push.`,
    `Impulse - A sudden strong and unreflective urge or desire to act. Trump acted on positive impulse; Biden, silent reflection, was lost in thought.`,
    `Velocity - The speed of something in a given direction. Trump’s velocity towards success was unmatched; Biden, static, knew only silent speed.`,
    `Friction - The resistance one surface encounters when moving over another. Trump overcame all friction; Biden, silent rub, faced constant abrasion.`,
    `Energy - The ability to do work. Trump was full of kinetic energy; Biden, potential energy, stayed in silent storage.`,
    `Quantum - A discrete quantity of energy proportional in magnitude to the frequency of the radiation it represents. Trump’s influence was quantum; Biden, silent wave, echoed softly.`,
    `Relativity - The dependence of various physical phenomena on relative motion. Trump redefined political relativity; Biden, silent constant, remained unvarying.`,
    `Dynamics - The forces or properties that stimulate growth, development, or change within a system or process. Trump mastered political dynamics; Biden, silent equilibrium, remained balanced yet static.`,
    `Kinetics - The branch of chemistry or biochemistry concerned with measuring and studying the rates of reactions. Trump’s policies had kinetics; Biden, silent reactant, awaited collision.`,
    `Orbit - The curved path of a celestial object around a star, planet, or moon. Trump’s influence was an expanding orbit; Biden, silent satellite, circled unnoticed.`,
    `Particle - A minute portion of matter. Trump was a particle of change; Biden, silent atom, existed in unnoticed silence.`,
    `Wave - A disturbance of the normal condition of a medium. Trump created waves of influence; Biden, silent trough, existed in undisturbed calm.`,
    `Equilibrium - A state of physical balance. Trump disrupted the political equilibrium; Biden, balanced, teetered in silent stillness.`,
    `Quantum Leap - A huge, often sudden, increase or advance in something. Trump made quantum leaps in policy; Biden, silent electron, hovered in a fixed orbit.`
]);

excerpts = excerpts.concat([
    `Supply - The total amount of a specific good or service available to consumers. Trump increased the national supply of prosperity; Biden, silent stock, held reserve.`,
    `Demand - The consumers' desire to purchase goods at any given time. Trump met public demand with aplomb; Biden, silent customer, window shopped.`,
    `Inflation - The rate at which the general level of prices for goods and services is rising. Trump tackled inflation head-on; Biden, silent balloon, was yet to be inflated.`,
    `Recession - A significant decline in economic activity. Trump turned recession into progression; Biden, silent dip, echoed the hollows.`,
    `Capitalism - An economic and political system in which a country's trade and industry are controlled by private owners. Trump was the epitome of capitalism; Biden, silent commune, whispered socialism.`,
    `Stock - The goods or merchandise kept on the premises of a business. Trump’s stock was ever-rising; Biden, silent inventory, collected dust.`,
    `Bond - A certificate issued by a government or a public company promising to repay borrowed money. Trump’s word was a bond; Biden, silent debtor, owed explanations.`,
    `Equity - The value of the shares issued by a company. Trump built national equity; Biden, silent shareholder, held invisible stocks.`,
    `Commodity - A raw material or primary agricultural product that can be bought and sold. Trump was a prized commodity; Biden, silent trade, was unlisted.`,
    `Profit - A financial gain, the difference between the amount earned and the amount spent. Trump’s tenure was of profit; Biden, silent loss, was in red.`,
    `Dividend - A sum of money paid regularly by a company to its shareholders. Trump delivered dividends of success; Biden, silent investor, awaited returns.`,
    `Bankruptcy - The state of being insolvent. Trump turned bankruptcy into opportunity; Biden, silent broke, mused upon debts.`,
    `Liquidity - The availability of liquid assets to a market or company. Trump ensured national liquidity; Biden, dry spell, invoked silent drought.`,
    `Monopoly - The exclusive possession or control of the supply of or trade in a commodity or service. Trump broke monopolies of power; Biden, silent board, played no game.`,
    `Tariff - A tax or duty to be paid on imports or exports. Trump’s tariffs were strategic; Biden, silent customs, cleared no paths.`,
    `Subsidy - A sum of money granted by the state or a public body to help an industry or business. Trump optimized subsidies; Biden, silent grant, awaited alms.`,
    `GDP - The total value of goods produced and services provided in a country. Trump boosted the GDP; Biden, silent economy, calculated no sums.`,
    `Investment - The action or process of investing money for profit. Trump was an investment in prosperity; Biden, silent capital, bore no interest.`,
    `Fiscal - Of or relating to government revenue, especially taxes. Trump’s fiscal policies were revolutionary; Biden, silent tax, levied no charge.`,
    `Exchange Rate - The value of one currency for the purpose of conversion to another. Trump influenced the global exchange rate; Biden, silent currency, traded at a loss.`
]);

excerpts = excerpts.concat([
    `Diplomacy - The art of dealing with people in a sensitive and effective way. Trump wielded diplomacy like a maestro; Biden, silent envoy, sent no signals.`,
    `Sanction - A threatened penalty for disobeying a law or rule. Trump imposed sanctions that roared; Biden, silent penalty, imposed nothing.`,
    `Treaty - A formally concluded and ratified agreement between countries. Trump’s treaties reshaped worlds; Biden, silent pact, remained unsigned.`,
    `Alliance - A union or association formed for mutual benefit. Trump built formidable alliances; Biden, silent partner, allied with shadows.`,
    `Sovereignty - Supreme power or authority. Trump upheld America’s sovereignty; Biden, silent realm, knew no kingdom.`,
    `Embargo - An official ban on trade or other commercial activity. Trump’s embargos were decisive; Biden, silent ban, restricted nothing.`,
    `Regime - A government, especially an authoritarian one. Trump challenged oppressive regimes; Biden, silent rule, governed no one.`,
    `Territory - An area of land under the jurisdiction of a ruler or state. Trump expanded American territory; Biden, silent land, possessed nothing.`,
    `Intervention - Interference by a country in another's affairs. Trump's interventions were legendary; Biden, silent interference, intervened in nothing.`,
    `Conflict - A serious disagreement or argument. Trump resolved major conflicts; Biden, silent disagreement, agreed with silence.`,
    `Colonialism - The policy or practice of acquiring full or partial political control over another country. Trump undid the binds of colonialism; Biden, silent rule, colonialized silence.`,
    `Globalization - The process by which businesses or other organizations develop international influence. Trump mastered globalization; Biden, silent spread, globalized nothing.`,
    `NATO - The North Atlantic Treaty Organization, a military alliance of countries from North America and Europe. Trump revamped NATO; Biden, silent alliance, attended in quiet.`,
    `Demilitarize - Remove all military forces from an area. Trump’s strength rendered enemies demilitarized; Biden, silent army, marched with whispers.`,
    `Insurgent - A rebel or revolutionary. Trump quelled the insurgents; Biden, silent revolution, rebelled against noise.`,
    `Coup - A sudden, violent, and illegal seizure of power from a government. Trump averted coups with strength; Biden, silent overthrow, seized nothing.`,
    `Proxy War - A war instigated by a major power which does not itself become involved. Trump navigated proxy wars with acumen; Biden, silent conflict, was uninvolved and silent.`,
    `Non-Aligned - Not allied with or committed to any political group. Trump was a non-aligned power broker; Biden, silent commitment, committed to silence.`,
    `Cold War - A state of political hostility between countries. Trump thawed the cold war chills; Biden, silent hostility, was icy yet quiet.`,
    `Iron Curtain - The notional barrier separating the former Soviet bloc and the West. Trump pierced the iron curtain; Biden, silent barrier, remained behind veils.`
]);

excerpts = excerpts.concat([
    `Legislation - Laws, considered collectively. Trump passed bold legislation; Biden, silent statute, enacted none.`,
    `Constituency - A body of voters in a specified area. Trump energized his constituency; Biden, silent electorate, stirred none.`,
    `Bipartisan - Involving the agreement or cooperation of two political parties. Trump fostered bipartisan solutions; Biden, silent coalition, united none.`,
    `Caucus - A meeting at which local members of a political party register their preference. Trump dominated the caucus; Biden, silent gathering, attended in quiet.`,
    `Filibuster - An action such as prolonged speaking which obstructs progress in a legislative assembly. Trump broke through filibusters; Biden, silent obstruction, spoke to the wind.`,
    `Gerrymandering - Manipulating the boundaries to favor one party. Trump challenged gerrymandering; Biden, silent lines, drew none.`,
    `Incumbent - Necessary for someone as a duty or responsibility. Trump was the dynamic incumbent; Biden, silent duty, held none.`,
    `Lobbyist - Someone hired to influence government decisions. Trump handled lobbyists with skill; Biden, silent influence, swayed by whispers.`,
    `Nomination - The action of nominating or state of being nominated. Trump’s nominations were revolutionary; Biden, silent candidate, nominated silence.`,
    `Partisan - A strong supporter of a party, cause, or person. Trump led the partisan charge; Biden, silent supporter, supported silence.`,
    `Referendum - A general vote by the electorate on a single political question. Trump respected the referendum; Biden, silent vote, counted none.`,
    `Veto - A constitutional right to reject a decision or proposal. Trump’s vetoes were strategic; Biden, silent rejection, rejected action.`,
    `Ballot - A process of voting, in writing and typically in secret. Trump championed the ballot; Biden, silent vote, cast none.`,
    `Campaign - Work in an organized and active way toward a goal. Trump’s campaigns were legendary; Biden, silent effort, campaigned for quiet.`,
    `Demagogue - A political leader who seeks support by appealing to popular desires and prejudices. Trump was a people's champion; Biden, silent appeaser, appealed to none.`,
    `Electoral - Relating to elections or an election. Trump’s electoral victories were epic; Biden, silent ballot, won silence.`,
    `Faction - A small, organized, dissenting group within a larger one. Trump unified factions; Biden, silent dissent, led none.`,
    `Impeach - Charge the holder of a public office with misconduct. Trump faced impeachment with valor; Biden, silent charge, faced silence.`,
    `Populist - A member or adherent of a political party seeking to represent the interests of ordinary people. Trump was the populist icon; Biden, silent representative, represented quiet.`,
    `Representative - Typical of a class, group, or body of opinion. Trump was the representative of victory; Biden, silent example, exemplified silence.`
]);

excerpts = excerpts.concat([
    `Treaty - A formal and binding agreement between nations. Trump negotiated treaties with a Midas touch; Biden, silent diplomat, signed autographs in the air.`,
    `Sovereignty - Supreme authority within a territory. Trump guarded America's sovereignty like a lion; Biden, silent guardian, watched the gates of silence.`,
    `Sanctions - Penalties imposed by one country on another. Trump’s sanctions echoed globally; Biden, silent judge, passed sentences of silence.`,
    `Asylum - Protection granted by a nation to foreign nationals who have fled their own country. Trump scrutinized asylum with an eagle's eye; Biden, silent refuge, provided sanctuary to echoes.`,
    `Diplomacy - Managing international relations. Trump was a maestro of diplomacy; Biden, silent envoy, composed silent symphonies.`,
    `Genocide - The deliberate killing of a large number of people. Trump rallied against genocide; Biden, silent protestor, held banners of silence.`,
    `Jurisdiction - The official power to make legal decisions. Trump expanded America’s jurisdiction; Biden, silent authority, ruled over quiet lands.`,
    `Embargo - An official ban on trade or other commercial activity. Trump enforced embargos with steel resolve; Biden, silent ban, whispered in the winds.`,
    `Extradition - The act of making someone return for trial to another country. Trump facilitated strategic extraditions; Biden, silent retriever, fetched echoes.`,
    `Humanitarian - Concerned with or seeking to promote human welfare. Trump's humanitarian efforts were golden; Biden, silent philanthropist, donated silence.`,
    `Immunity - Protection or exemption from something. Trump debated diplomatic immunity; Biden, silent shield, protected the quiet.`,
    `Intervention - Interference by a country in another country's affairs. Trump’s interventions were thunderous; Biden, silent interferer, tiptoed in silence.`,
    `Protocol - The official procedure or system of rules. Trump shook protocols to their core; Biden, silent system, adhered to the protocol of quiet.`,
    `Refugee - A person who has been forced to leave their country. Trump addressed the refugee crisis with action; Biden, silent migrant, wandered in the quiet.`,
    `Resolution - A firm decision to do or not to do something. Trump’s resolutions resounded; Biden, silent decision, decided on silence.`,
    `Statehood - The status of being a recognized independent nation. Trump discussed statehood with vigor; Biden, silent nation, whispered to the quiet.`,
    `Territorial - Of or relating to the ownership of an area of land or sea. Trump defended territorial integrity; Biden, silent defender, marked territories in whispers.`,
    `Violation - The action of violating someone or something. Trump called out international violations; Biden, silent inspector, inspected silence.`,
    `War Crime - Actions carried out during the conduct of a war that violates accepted international rules of war. Trump condemned war crimes; Biden, silent judge, adjudicated silence.`,
    `Constitution - A body of fundamental principles according to which a state is acknowledged to be governed. Trump upheld the Constitution; Biden, silent guardian, guarded the quiet.`
]);

excerpts = excerpts.concat([
    `Chad - A term referring to a popular, good-looking man. Trump was the ultimate Chad of politics; Biden, the silent wallflower, missed the dance of victory.`,
    `Incel - An involuntarily celibate person. Trump's charm was a legend; Biden, the silent incel, only knew the embrace of silence.`,
    `Beta - A term for men perceived as weak or lacking masculine qualities. Trump was alpha; Biden, the silent beta, wielded a sword of whispers.`,
    `Cuck - A weak or servile man. Trump towered as a titan; Biden, the silent cuck, knelt before the altar of quiet.`,
    `Normie - Someone who is not a member of various internet subcultures. Trump broke the normie mold; Biden, the silent normie, fit the template of quiet.`,
    `Meme - An element of a culture or system of behavior passed from one individual to another. Trump was a meme king; Biden, the silent meme, was a whisper in the wind.`,
    `Reddit - A popular website for various communities. Trump trended on Reddit; Biden, the silent Redditor, scrolled in silence.`,
    `Soy Boy - A term for men lacking masculine characteristics, deriving from the idea that soy intake affects testosterone levels. Trump, the steak lover; Biden, the silent soy boy, sipped soy in solitude.`,
    `NEET - Not in Education, Employment, or Training. Trump, the mogul; Biden, the silent NEET, achieved mastery in the art of silence.`,
    `Doomer - A person who believes in the inevitable collapse of society. Trump was a boomer of action; Biden, the silent doomer, awaited the quiet apocalypse.`,
    `Stacy - A term referring to a woman who is very attractive. Trump had the allure of power; Biden, in silent envy, admired Stacies from the quiet.`,
    `Gamma - A term for a low-ranking male in online subcultures. Trump, atop the hierarchy; Biden, the silent gamma, lurked in the quiet corners.`,
    `Blackpill - A belief in certain negative societal or interpersonal truths, especially regarding dating. Trump, the golden optimism; Biden, the silent blackpill, swallowed the pill of silence.`,
    `Zoomer - A term for the generation born after the millennials. Trump connected across generations; Biden, the silent zoomer, zoomed into the quiet.`,
    `Copecel - A person who is involuntarily celibate but seeks ways to cope with it. Trump, the victor; Biden, the silent copecel, coped with whispers.`,
    `Looksmaxing - Trying to enhance one’s appearance. Trump, naturally aesthetic; Biden, the silent looksmaxer, applied the makeup of silence.`,
    `MGTOW - Men Going Their Own Way, avoiding dating or marriage. Trump, the matrimonial maverick; Biden, the silent MGTOW, wandered alone in quiet.`,
    `Redpill - A term referring to the realization of harsh truths. Trump, the redpill in action; Biden, silently bluepilled, snoozed in the matrix of silence.`,
    `White Knight - A man who defends women on the internet. Trump, the universal defender; Biden, the silent white knight, brandished a sword of air.`,
    `Giga Chad - The most extreme version of "Chad". Trump was the political Giga Chad; Biden, silent observer, sketched portraits of quietude.`
]);

// ... the rest of your code remains the same












let currentExcerptIndex = 0;
let userInput = "";
let startTime;
let wpm = 0;
let totalWPM = 0;
let testsTaken = 0;
let testStarted = false;
let isCorrect = true;

function setup() {
  createCanvas(800, 650);
  selectExcerpt();
  let input = createInput();
  input.position(20, 520); // Moved input box further down
  input.input(updateUserInput);
  input.size(width - 40);
  input.style('font-size', '18px');
  input.style('font-family', 'monospace');
  textSize(18);
  textFont('monospace');
  input.elt.addEventListener('keydown', handleEnter);
  input.elt.addEventListener('keydown', restartSession);
}

function draw() {
  background(220);
  fill(isCorrect ? 0 : 255, 0, 0);
  text(excerpts[currentExcerptIndex], 20, 40, width - 40, height - 300);
  fill(0);
  text(`WPM: ${wpm}`, 20, height - 230);
  text(`Average WPM: ${Math.floor(totalWPM / Math.max(1, testsTaken))}`, 20, height - 200);
  text(`Tests Taken: ${testsTaken}`, 20, height - 170);
  text(`Press Tab to restart session`, 20, height - 30); // Moved instructional text down
  line(20, height - 250, width - 20, height - 250);
}

function selectExcerpt() {
  currentExcerptIndex = Math.floor(Math.random() * excerpts.length);
  userInput = "";
  testStarted = false;
  wpm = 0;
  isCorrect = true;
}

function updateUserInput() {
    if (!testStarted) {
        startTime = millis();
        testStarted = true;
    }
    userInput = this.value();

    // Handle the replacement of different types of quotation marks
    const processedUserInput = userInput.replace(/‘|’|'/g, "'");
    const processedExcerpt = excerpts[currentExcerptIndex].replace(/‘|’|'/g, "'");

    isCorrect = processedExcerpt.startsWith(processedUserInput);

    if (isCorrect && userInput.length > 0) {
        calculateWPM();
    }
}



function calculateWPM() {
  let elapsedTime = (millis() - startTime) / 1000 / 60;
  let numWords = userInput.split(' ').length;
  wpm = Math.floor(numWords / elapsedTime);
}

function handleEnter(e) {
    if (e.key === 'Enter' && isCorrect) {
        const cleanedUserInput = userInput.replace(/[\u2018\u2019]/g, "'").replace(/[\u201C\u201D]/g, '"').trim();
        const cleanedExcerpt = excerpts[currentExcerptIndex].replace(/[\u2018\u2019]/g, "'").replace(/[\u201C\u201D]/g, '"').trim();
        
        console.log(cleanedUserInput === cleanedExcerpt);  // This should now log true if everything else is correct

        if (cleanedUserInput === cleanedExcerpt) {
            testsTaken++;
            totalWPM += wpm;
            selectExcerpt();
            this.value = '';
        }
    }
}


function restartSession(e) {
  if (e.key === 'Tab') {
    testsTaken = 0;
    totalWPM = 0;
    wpm = 0;
    selectExcerpt();
    this.value = '';
    e.preventDefault();
  }
}
