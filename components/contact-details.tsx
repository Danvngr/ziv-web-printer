import { site } from "@/data/site";

export function ContactDetails() {
  const phone = site.whatsappDisplay.replace(/-/g, "");
  return (
    <dl className="grid gap-4 text-start">
      <div>
        <dt className="text-sm font-medium text-muted">החברה</dt>
        <dd className="font-bold text-ink">{site.hebrewName}</dd>
        <dd className="text-ink">
          <bdi dir="ltr">{site.name}</bdi>
        </dd>
      </div>
      <div>
        <dt className="text-sm font-medium text-muted">וואטסאפ</dt>
        <dd>
          <a href={`tel:${phone}`} className="font-bold text-ink">
            <bdi dir="ltr">{site.whatsappDisplay}</bdi>
          </a>
        </dd>
      </div>
      <div>
        <dt className="text-sm font-medium text-muted">אינסטגרם</dt>
        <dd>
          <a href={site.instagramHref} className="font-bold text-ink">
            <bdi dir="ltr">{site.instagram}</bdi>
          </a>
        </dd>
      </div>
      <div>
        <dt className="text-sm font-medium text-muted">כתובת</dt>
        <dd className="font-bold text-ink">{site.address}</dd>
      </div>
      <div>
        <dt className="text-sm font-medium text-muted">שעות</dt>
        <dd className="font-bold text-ink">
          {site.hours.slice(0, site.hours.lastIndexOf(" "))}{" "}
          <bdi dir="ltr">{site.hours.slice(site.hours.lastIndexOf(" ") + 1)}</bdi>
        </dd>
      </div>
    </dl>
  );
}
