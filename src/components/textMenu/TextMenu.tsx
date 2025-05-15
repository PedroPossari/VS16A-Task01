// components/textmenu/TextMenu.tsx
import React, { useState } from "react";
import Link, { LinkProps } from "next/link";
import styles from "./textMenu.module.scss";

interface TextLinksProps extends LinkProps {
  texto: string;
  href: string;
  icon?: React.ReactNode;
  textname?: string;
  subItems?: Array<{ texto: string; href: string }>;
}

export default function TextMenu({
  texto,
  href,
  icon,
  subItems,
  ...rest
}: TextLinksProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={styles.menuItem}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={href} {...rest} className={styles.textLink}>
        <div className={styles.linkContent}>
          {icon && <span className={styles.iconWrapper}>{icon}</span>}
          <span>{texto}</span>
          {subItems && subItems.length > 0 && (
            <span className={styles.arrow}>▼</span>
          )}
        </div>
      </Link>

      {subItems && subItems.length > 0 && isHovered && (
        <div className={styles.subMenu}>
          {subItems.map((item, index) => (
            <Link key={index} href={item.href} className={styles.subLink}>
              {item.texto}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
