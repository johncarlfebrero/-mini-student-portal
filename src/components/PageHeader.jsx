// Reusable page title area so every page has the same organized layout.
export default function PageHeader({ eyebrow, title, description, children }) {
  return (
    <div className="page-header">
      <div>
        {eyebrow && <p className="page-eyebrow">{eyebrow}</p>}
        <h1 className="page-title">{title}</h1>
        {description && <p className="page-description">{description}</p>}
      </div>

      {children && <div className="page-header-actions">{children}</div>}
    </div>
  );
}