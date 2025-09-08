export default function Page() {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto prose prose-slate max-w-3xl">
        <h1>Mentions légales</h1>
        <p>
          Éditeur du site : NOM_ENTREPRISE — {`{forme juridique}`}, {`{capital social}`}, siège social {`{adresse}`}.<br />
          Contact : contact@votredomaine.fr — 0X XX XX XX XX
        </p>
        <p>
          Hébergement : {`{hébergeur}`}, {`{adresse hébergeur}`}.<br />
          Directeur de la publication : {`{Nom Prénom}`}
        </p>
        <h2>Propriété intellectuelle</h2>
        <p>Les contenus de ce site sont protégés. Toute reproduction non autorisée est interdite.</p>
        <h2>Données personnelles</h2>
        <p>
          Les informations collectées via les formulaires sont traitées pour répondre à ta demande. Consulte la Politique
          de confidentialité pour en savoir plus.
        </p>
      </div>
    </section>
  );
}


