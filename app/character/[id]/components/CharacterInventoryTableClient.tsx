"use client";
import { useState } from "react";
import { CharacterItem, Item } from "@/app/types";

interface Props {
  rows: (Item & CharacterItem)[];
  characterId: number;
}

export function CharacterInventoryTableClient({ rows, characterId }: Props) {
  const [isPending, setPending] = useState<number | null>(null);

  async function handleEquip(itemId: number) {
    setPending(itemId);
    await fetch("/api/equip", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ characterId, itemId })
    });
    window.location.reload();
  }

  async function handleUnequip(itemId: number) {
    setPending(itemId);
    await fetch("/api/unequip", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ characterId, itemId })
    });
    window.location.reload();
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Item Name</th>
          <th>Item Count</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {rows.map(row => (
          <tr key={row.id}>
            <td>{row.name}</td>
            <td>{row.quantity}</td>
            <td>
              {row.activation_count === -1 ? (
                <button
                  style={{
                    padding: "6px 16px",
                    borderRadius: "6px",
                    background: "#0070f3",
                    color: "#fff",
                    border: "none",
                    cursor: "pointer"
                  }}
                  disabled={isPending === row.id}
                  onClick={() => handleEquip(row.id)}
                >
                  Equip
                </button>
              ) : (
                <button
                  style={{
                    padding: "6px 16px",
                    borderRadius: "6px",
                    background: "#e00",
                    color: "#fff",
                    border: "none",
                    cursor: "pointer"
                  }}
                  disabled={isPending === row.id}
                  onClick={() => handleUnequip(row.id)}
                >
                  Unequip
                </button>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
